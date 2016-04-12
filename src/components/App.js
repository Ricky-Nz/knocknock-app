import React from 'react';
import MessageToastContainer from '../containers/MessageToastContainer';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import { deepOrange500, blueGrey500 } from 'material-ui/lib/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
    accent1Color: blueGrey500
  }
});

const Application = ({children}) => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<div className='fillHeight flex'>
			{children}
			<MessageToastContainer/>
		</div>
	</MuiThemeProvider>
);

export default Application;