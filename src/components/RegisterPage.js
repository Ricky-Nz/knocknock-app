import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import Checkbox from 'material-ui/Checkbox';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionHome from 'material-ui/svg-icons/action/home';

class RegisterPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'ruiqi.sg@gmail.com',
			password: '96452556',
			repeatPassword: '96452556',
			contactNo: '96452556',
			showPassword: false
		};
		this.onUsernameChange = this.onUsernameChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
		this.onContactNoChange = this.onContactNoChange.bind(this);
		this.onRegisterClicked = this.onRegisterClicked.bind(this);
		this.onShowPasswordChange = this.onShowPasswordChange.bind(this);
		this.onBack = this.onBack.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.running&&!nextProps.error&&this.props.running) {
			this.context.router.replace('login');
		}
	}
	onBack() {
		this.context.router.replace('login');
	}
	onUsernameChange(event) {
		this.setState({username: event.target.value});
	}
	onPasswordChange(event) {
		this.setState({password: event.target.value});
	}
	onRepeatPasswordChange(event) {
		this.setState({repeatPassword: event.target.value});
	}
	onContactNoChange(event) {
		this.setState({contactNo: event.target.value});
	}
	onShowPasswordChange() {
		this.setState({showPassword: !this.state.showPassword});
	}
	onRegisterClicked() {
		if (!this.state.username) {
			this.props.toast('User nmae can not be empty');
			return;
		}

		if (!this.state.contactNo) {
			this.props.toast('Contact number can not be empty');
			return;
		}

		if (!this.state.password) {
			this.props.toast('Login password can not be empty');
			return;
		}

		if (this.state.password !== this.state.repeatPassword) {
			this.props.toast('Password not match, please reenter');
			return;
		}

		this.props.onRegister(this.state);
	}
	render() {
		const { registering } = this.props;
		const { username, contactNo, password, repeatPassword, showPassword } = this.state;

		return (
			<div className='row'>
			  <AppBar title='User Register'
			    iconElementLeft={<IconButton onClick={this.onBack}><ArrowBack/></IconButton>}/>
				<div className='col-xs-10 col-xs-offset-1'>
					<TextField fullWidth={true} value={username} disabled={registering}
						floatingLabelText='User name' onChange={this.onUsernameChange}/>
					<TextField fullWidth={true} value={contactNo} disabled={registering}
						floatingLabelText='Contact number' onChange={this.onContactNoChange}/>
					<TextField type={showPassword?'text':'password'} fullWidth={true} value={password} disabled={registering}
						floatingLabelText='Password' onChange={this.onPasswordChange}/>
					<TextField type={showPassword?'text':'password'} fullWidth={true} value={repeatPassword} disabled={registering}
						floatingLabelText='Repeat password' onChange={this.onRepeatPasswordChange}/>
					<div>
						<Checkbox style={styles.checkbox} checked={showPassword}
							label='Show password' onCheck={this.onShowPasswordChange}/>
					</div>
			    <RaisedButton style={styles.button} label='Submit' fullWidth={true} primary={true}
						icon={<ActionHome/>} onClick={this.onRegisterClicked} disabled={registering}/>
					<div className='flex flex-center flex-align-center' style={styles.progressContainer}>
						{registering&&<CircularProgress size={0.8}/>}
					</div>
				</div>
			</div>
		);
	}
}

RegisterPage.contextTypes = {
  router: React.PropTypes.object
};

RegisterPage.propTypes = {
	error: PropTypes.string,
	registering: PropTypes.bool,
	onRegister: PropTypes.func.isRequired,
	toast: PropTypes.func.isRequired
};

const styles = {
	progressContainer: {
		paddingTop: 30
	},
	checkbox: {
		padding: '10px 0px'
	},
	button: {
		marginTop: 20
	}
};

export default RegisterPage;

