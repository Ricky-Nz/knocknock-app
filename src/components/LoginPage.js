import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconCheck from 'material-ui/svg-icons/navigation/check';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import { PRIMARY_COLOR, LoadingProgress, EditText } from '../widgets';

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPassword: false,
			dialogShow: false
		};
		this.onLoginClicked = this.onLoginClicked.bind(this);
		this.onRegisterClicked = this.onRegisterClicked.bind(this);
		this.onShowPasswordChange = this.onShowPasswordChange.bind(this);
		this.toggleDialog = this.toggleDialog.bind(this);
		this.onForgotPassword = this.onForgotPassword.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.loggingin&&this.props.loggingin&&nextProps.loginSuccess) {
			this.context.router.replace('/home');
		} else if (!nextProps.forgoting&&this.props.forgoting&&this.state.dialogShow) {
			this.setState({dialogShow: false});
		}
	}
	onRegisterClicked() {
		this.context.router.replace('/register');
	}
	onLoginClicked() {
		const username = this.refs.username.getValidValue();
		const password = this.refs.password.getValidValue();
		if (!username || !password) {
			return;
		}

		this.props.login({username, password});
	}
	onShowPasswordChange() {
		this.setState({showPassword: !this.state.showPassword});
	}
	toggleDialog() {
		this.setState({dialogShow: !this.state.dialogShow})
	}
	onForgotPassword() {
		if (this.state.dialogShow) {
			this.props.forgotPassword(this.refs.username.getValidValue());
		} else {
			if (!this.refs.username.getValidValue()) {
				return;
			}

			this.setState({dialogShow: true});
		}
	}
	render() {
		const { loggingin, forgoting } = this.props;
		const { showPassword, dialogShow } = this.state;

		return (
			<div className='flex flex-fill page'>
				<div className='flex flex-center flex-align-center'>
					<p style={styles.title}>Knocknock</p>
				</div>
				<div className='flex flex-fill padding-horizontal margin-horizontal'>
					<EditText ref='username' fullWidth={true} disabled={loggingin}
						floatingLabelText='Email' errorText='please enter a valid email address'
						verify={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}/>
					<EditText ref='password' type={showPassword?'text':'password'} fullWidth={true}
						disabled={loggingin} floatingLabelText='Password'
						errorText='password can not be empty' verify={/([^\s])/}/>
					<br/>
			    <Checkbox checked={showPassword} disabled={loggingin}
						label='Show password' onCheck={this.onShowPasswordChange}/>
					<br/>
			    <RaisedButton label='Log in' primary={true} fillWidth={true}
						icon={<IconCheck/>} onClick={this.onLoginClicked} disabled={loggingin}/>
					<br/>
					{loggingin&&<LoadingProgress/>}
					<div className='flex flex-align-center flex-fill flex-end padding-vertical margin-vertical'>
						<FlatButton label='Create New Knocknock Account' primary={true}
							onClick={this.onRegisterClicked}/>
						<FlatButton label='Forgot Password?' onClick={this.onForgotPassword}/>
					</div>
				</div>
        <Dialog title='Forgot Password'
          actions={forgoting?[]:[
			      <FlatButton label='Cancel' onClick={this.toggleDialog}/>,
			      <FlatButton label='OK' primary={true} onClick={this.onForgotPassword}/>,
		    	]} modal={false} open={dialogShow}
          onRequestClose={this.toggleDialog}>
          {forgoting?<LoadingProgress/>:`Send a new password to?`}
        </Dialog>
			</div>
		);
	}
}

LoginPage.contextTypes = {
  router: React.PropTypes.object
};

LoginPage.propTypes = {
	loggingin: PropTypes.bool,
	loginSuccess: PropTypes.bool,
	forgoting: PropTypes.bool,
	login: PropTypes.func.isRequired,
	forgotPassword: PropTypes.func.isRequired,
	toast: PropTypes.func.isRequired
};

const styles = {
	title: {
		marginTop: 56,
		fontSize: '3em',
		color: PRIMARY_COLOR,
		textAlign: 'center'
	}
};

export default LoginPage;

