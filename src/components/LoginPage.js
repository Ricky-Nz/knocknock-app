import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import CircularProgress from 'material-ui/lib/circular-progress';
import ActionHome from 'material-ui/lib/svg-icons/action/home';

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
	componentDidMount() {
		if (this.props.token) {
			this.context.router.replace('dashboard');
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.token) {
			this.context.router.replace('dashboard');
		}
	}
	onUsernameChange(event) {
		this.setState({username: event.target.value});
	}
	onPasswordChange(event) {
		this.setState({password: event.target.value});
	}
	onRegisterClicked() {
		this.context.router.replace('register');
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
			<div className='row'>
				<div className='col-xs-10 col-xs-offset-1'>
					<TextField fullWidth={true} value={username} disabled={loggingin}
						floatingLabelText='User name' onChange={this.onUsernameChange}/>
					<TextField type='password' fullWidth={true} value={password} disabled={loggingin}
						floatingLabelText='Password' onChange={this.onPasswordChange}/>
					<div className='row'>
						<div className='col-xs-6'>
					    <RaisedButton label='Register' fullWidth={true}
								icon={<ActionHome/>} onTouchTap={this.onRegisterClicked} disabled={loggingin}/>
						</div>
						<div className='col-xs-6'>
					    <RaisedButton label='Login' primary={true} fullWidth={true}
								icon={<ActionHome/>} onTouchTap={this.onLoginClicked} disabled={loggingin}/>
						</div>
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
	token: PropTypes.string,
	loggingin: PropTypes.bool,
	onLogin: PropTypes.func.isRequired
};

const styles = {
	progressContainer: {
		paddingTop: 50
	}
};

export default LoginPage;

