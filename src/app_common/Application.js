import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500, blueGrey500 } from 'material-ui/styles/colors';
import { MessageToast } from '../containers';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
    accent1Color: blueGrey500
  }
});

let Application = ({children, location}) => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<div className='app flex flex-fill'>
			{children}
			<MessageToast/>
		</div>
	</MuiThemeProvider>
);

Application.contextTypes = {
  router: React.PropTypes.object
};

const styles = {
	container: {
		height: '100%'
	}
};

export default Application;