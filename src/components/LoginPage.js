import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import IconPersonAdd from 'material-ui/svg-icons/social/person-add';
import IconCheck from 'material-ui/svg-icons/navigation/check';
import { deepOrange500 } from 'material-ui/styles/colors';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'mengyingz@gmail.com',
			password: '123456'
		};
		this.onUsernameChange = this.onUsernameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onLoginClicked = this.onLoginClicked.bind(this);
		this.onRegisterClicked = this.onRegisterClicked.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.loggingin&&this.props.loggingin&&nextProps.loginSuccess) {
			this.context.router.replace('/dashboard');
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

		this.props.onLogin(this.state);
	}
	render() {
		const { loggingin } = this.props;
		const { username, password } = this.state;

		return (
			<div className='flex flex-fill page'>
				<div className='flex flex-center flex-align-center'>
					<p style={styles.title}>Knocknock</p>
				</div>
				<div className='padding margin'>
					<TextField fullWidth={true} value={username} disabled={loggingin}
						floatingLabelText='Email / Phone' onChange={this.onUsernameChange}/>
					<TextField type='password' fullWidth={true} value={password} disabled={loggingin}
						floatingLabelText='Password' onChange={this.onPasswordChange}/>
					<div className='flex flex-row padding-top'>
				    <RaisedButton className='flex-fill' style={styles.leftButton} label='Register'
							icon={<IconPersonAdd/>} onClick={this.onRegisterClicked} disabled={loggingin}/>
				    <RaisedButton className='flex-fill' style={styles.rightButton} label='Login' primary={true}
							icon={<IconCheck/>} onClick={this.onLoginClicked} disabled={loggingin}/>
					</div>
					<div className='flex flex-center flex-align-center' style={styles.progressContainer}>
						{loggingin&&<CircularProgress size={0.8}/>}
					</div>
				</div>
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
	onLogin: PropTypes.func.isRequired
};

const styles = {
	progressContainer: {
		paddingTop: 50
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

