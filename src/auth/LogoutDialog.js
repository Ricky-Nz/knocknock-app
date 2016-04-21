import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class LogoutDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {show: false};
	}
  onRequestClose = () => {
  	this.setState({show: false});
  }
  onLogOut = () => {
  	this.onRequestClose();
  	this.props.logOut();
  	this.context.router.replace('/login');
  }
	render() {
		return (
      <Dialog title='Log out?' actions={[
        	<FlatButton label='Cancel' onClick={this.onRequestClose}/>,
      		<FlatButton label='Log out' primary={true} onClick={this.onLogOut}/>
      	]} modal={false}
        open={this.state.show} onRequestClose={this.onRequestClose}/>
		);
	}
}

LogoutDialog.propTypes = {
	logOut: PropTypes.func.isRequired
};

LogoutDialog.contextTypes = {
  router: React.PropTypes.object
};

export default LogoutDialog;