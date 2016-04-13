import React from 'react';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import { deepOrange500, blueGrey500 } from 'material-ui/lib/styles/colors';
import { MessageToast } from '../containers';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
    accent1Color: blueGrey500
  }
});

const Application = ({children}) => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<div className='flex' style={styles.container}>
			{children}
			<MessageToast/>
		</div>
	</MuiThemeProvider>
);

const styles = {
	container: {
		height: '100%'
	}
};

export default Application;