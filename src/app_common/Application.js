import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500, blueGrey500 } from 'material-ui/styles/colors';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MessageToastContainer from './MessageToastContainer';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
    accent1Color: blueGrey500,
    secondary1Color: blueGrey500
  }
});

let Application = ({children, location}) => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<div className='app flex flex-fill'>
			{children}
			<MessageToastContainer/>
		</div>
	</MuiThemeProvider>
);

export default Application;