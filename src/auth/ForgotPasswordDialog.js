import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { LoadingProgress } from '../app_widgets';

class ForgotPasswordDialog extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
		this.onRequestClose = this.onRequestClose.bind(this);
		this.onForgotPassword = this.onForgotPassword.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.penndingForgotEmail&&nextProps.penndingForgotEmail!==this.props.penndingForgotEmail) {
			this.setState({show: true});
		} else if (!nextProps.processing&&this.props.processing) {
			this.setState({show: false});
		}
	}
	onRequestClose() {
		this.setState({show: false});
	}
	onForgotPassword() {
		this.props.forgotPassword(this.props.penndingForgotEmail.address);
	}
	render() {
		const { processing, penndingForgotEmail } = this.props;

		return (
      <Dialog title='Forgot Password'
        actions={processing?null:[
		      <FlatButton label='Cancel' onClick={this.onRequestClose}/>,
		      <FlatButton label='OK' primary={true} onClick={this.onForgotPassword}/>,
	    	]} modal={false} open={this.state.show} onRequestClose={this.onRequestClose}>
        {processing?<LoadingProgress/>:`Send a new password to ${penndingForgotEmail?penndingForgotEmail.address:''}?`}
      </Dialog>
		);
	}
}

ForgotPasswordDialog.propTypes = {
	processing: PropTypes.bool,
	penndingForgotEmail: PropTypes.object,
	forgotPassword: PropTypes.func.isRequired
};

export default ForgotPasswordDialog;