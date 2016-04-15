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
			showPassword: false,
			phoneNumber: '',
			password: '',
			repeatPassword: ''
		};
		this.onPhoneChange = this.onPhoneChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
		this.onRegisterClicked = this.onRegisterClicked.bind(this);
		this.onShowPasswordChange = this.onShowPasswordChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.registering&&this.props.registering&&nextProps.registerSuccess) {
			this.context.router.goBack();
		}
	}
	onPhoneChange(event) {
		this.setState({phoneNumber: event.target.value});
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
		let { phoneNumber, password, repeatPassword } = this.state;

		phoneNumber = phoneNumber&&phoneNumber.replace(/ /g,'');

		if (!phoneNumber || phoneNumber.length !== 8 || isNaN(phoneNumber)) {
			this.props.toast('Please enter a valid phone number as your login username');
			return;
		}

		if (!password || password.length < 8) {
			this.props.toast('Password is too short, try one with at least 8 characters');
			return;
		}

		if (password !== repeatPassword) {
			this.props.toast('Password not match, please reenter');
			return;
		}

		this.props.onRegister(this.state);
	}
	render() {
		const { registering } = this.props;
		const { phoneNumber, password, repeatPassword, showPassword } = this.state;

		return (
			<div className='flex flex-fill page'>
			  <AppBar title='User Register'
			    iconElementLeft={<IconButton onClick={this.context.router.goBack}><ArrowBack/></IconButton>}
					iconElementRight={registering?<CircularProgress size={0.5} color='white'/>:null}/>
				<div className='padding margin'>
					<TextField fullWidth={true} type='number' value={phoneNumber} disabled={registering}
						floatingLabelText='Phone' onChange={this.onPhoneChange} disabled={registering}/>
					<TextField type={showPassword?'text':'password'} fullWidth={true} value={password} disabled={registering}
						floatingLabelText='Password' onChange={this.onPasswordChange} disabled={registering}/>
					<TextField type={showPassword?'text':'password'} fullWidth={true} value={repeatPassword} disabled={registering}
						floatingLabelText='Repeat password' onChange={this.onRepeatPasswordChange} disabled={registering}/>
					<div>
						<Checkbox style={styles.checkbox} checked={showPassword} disabled={registering}
							label='Show password' onCheck={this.onShowPasswordChange}/>
					</div>
			    <RaisedButton style={styles.button} label='Submit' fullWidth={true} primary={true}
						icon={<ActionHome/>} onClick={this.onRegisterClicked} registering={registering}/>
				</div>
			</div>
		);
	}
}

RegisterPage.contextTypes = {
  router: React.PropTypes.object
};

RegisterPage.propTypes = {
	registering: PropTypes.bool,
	registerSuccess: PropTypes.bool,
	onRegister: PropTypes.func.isRequired,
	toast: PropTypes.func.isRequired
};

const styles = {
	checkbox: {
		padding: '10px 0px'
	},
	button: {
		marginTop: 20
	}
};

export default RegisterPage;

