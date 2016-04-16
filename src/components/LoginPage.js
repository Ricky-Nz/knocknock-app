import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import IconCheck from 'material-ui/svg-icons/navigation/check';
import { deepOrange500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import { LoadingProgress } from '../widgets';

function isValidEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPassword: false,
			dialogShow: false,
			username: 'mengyingz@gmail.com',
			password: '123456'
		};
		this.onUsernameChange = this.onUsernameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onLoginClicked = this.onLoginClicked.bind(this);
		this.onRegisterClicked = this.onRegisterClicked.bind(this);
		this.onShowPasswordChange = this.onShowPasswordChange.bind(this);
		this.toggleDialog = this.toggleDialog.bind(this);
		this.onForgotPassword = this.onForgotPassword.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.loggingin&&this.props.loggingin&&nextProps.loginSuccess) {
			this.context.router.replace('/dashboard');
		} else if (!nextProps.forgoting&&this.props.forgoting&&this.state.dialogShow) {
			this.setState({dialogShow: false});
		}
	}
	onUsernameChange(event) {
		this.setState({username: event.target.value});
	}
	onPasswordChange(event) {
		this.setState({password: event.target.value});
	}
	onRegisterClicked() {
		this.context.router.push('register');
	}
	onLoginClicked() {
		if (!this.state.username) {
			this.setState({toast: true, message: 'User nmae can not be empty'});
			return;
		}

		if (!this.state.password) {
			this.setState({toast: true, message: 'Login password can not be empty'});
			return;
		}

		this.props.login(this.state);
	}
	onShowPasswordChange() {
		this.setState({showPassword: !this.state.showPassword});
	}
	toggleDialog() {
		this.setState({dialogShow: !this.state.dialogShow})
	}
	onForgotPassword() {
		if (this.state.dialogShow) {
			this.props.forgotPassword(this.state.username);
		} else {
			if (!isValidEmail(this.state.username)) {
				this.toast('Please neter a valid login email');
				return;
			}

			this.setState({dialogShow: true});
		}
	}
	render() {
		const { loggingin, forgoting } = this.props;
		const { username, password, showPassword, dialogShow } = this.state;

		return (
			<div className='flex flex-fill page'>
				<div className='flex flex-center flex-align-center'>
					<p style={styles.title}>Knocknock</p>
				</div>
				<div className='flex flex-fill padding margin'>
					<TextField fullWidth={true} value={username} disabled={loggingin}
						floatingLabelText='Email' onChange={this.onUsernameChange}/>
					<TextField type={showPassword?'text':'password'} fullWidth={true} value={password} disabled={loggingin}
						floatingLabelText='Password' onChange={this.onPasswordChange}/>
			    <Checkbox style={styles.checkbox} checked={showPassword} disabled={loggingin}
						label='Show password' onCheck={this.onShowPasswordChange}/>
			    <RaisedButton label='Log in' primary={true} fillWidth={true}
						icon={<IconCheck/>} onClick={this.onLoginClicked} disabled={loggingin}/>
					<br/>
					{loggingin&&<LoadingProgress/>}
					<div className='flex flex-align-center flex-fill flex-end'>
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
          {forgoting?<LoadingProgress/>:`Send a new password to ${username}?`}
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
	progressContainer: {
		paddingTop: 40
	},
	checkbox: {
		margin: '4 0 12'
	},
	title: {
		marginTop: 72,
		fontSize: '3em',
		color: deepOrange500,
		textAlign: 'center'
	},
	leftButton: {
		marginRight: 4
	},
	rightButton: {
		marginLeft: 4
	}
};

export default LoginPage;

