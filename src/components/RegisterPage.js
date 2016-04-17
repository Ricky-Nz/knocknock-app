import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import IconPersonAdd from 'material-ui/svg-icons/social/person-add';
import { ActionBar } from '../widgets';

class RegisterPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPassword: false,
			email: '',
			phoneNumber: '',
			password: '',
			repeatPassword: ''
		};
		this.onEmailChange = this.onEmailChange.bind(this);
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
	onEmailChange(event) {
		this.setState({email: event.target.value});
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
	onShowPasswordChange() {
		this.setState({showPassword: !this.state.showPassword});
	}
	onRegisterClicked() {
		let { email, phoneNumber, password, repeatPassword } = this.state;

		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
			this.props.toast('Please enter a valid email address');
			return;
    }

		phoneNumber = phoneNumber&&phoneNumber.replace(/ /g,'');

		if (!phoneNumber || phoneNumber.length !== 8 || isNaN(phoneNumber)) {
			this.props.toast('Please enter a valid phone number');
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
		const { email, phoneNumber, password, repeatPassword, showPassword } = this.state;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title='Create New Account' running={registering}
					onLeftMenuClicked={this.context.router.goBack}/>
				<div className='flex flex-fill padding margin-horizontal'>
					<TextField fullWidth={true} value={email}
						hintText='Email' onChange={this.onEmailChange} disabled={registering}/>
					<TextField fullWidth={true} type='number' value={phoneNumber}
						hintText='Phone' onChange={this.onPhoneChange} disabled={registering}/>
					<TextField type={showPassword?'text':'password'} fullWidth={true} value={password}
						hintText='Password' onChange={this.onPasswordChange} disabled={registering}/>
					<TextField type={showPassword?'text':'password'} fullWidth={true} value={repeatPassword}
						hintText='Repeat password' onChange={this.onRepeatPasswordChange} disabled={registering}/>
					<Checkbox style={styles.checkbox} checked={showPassword} disabled={registering}
						label='Show password' onCheck={this.onShowPasswordChange}/>
			    <RaisedButton style={styles.button} label='Create' fullWidth={true} primary={true}
						icon={<IconPersonAdd/>} onClick={this.onRegisterClicked} registering={registering}/>
					<div className='flex flex-fill flex-align-center flex-end padding-bottom'>
						<p style={styles.terms}>By signing up, I aggree to Knocknock's Terms of Service, Privacy Prolicy, Guest Refund Policy, and Host Guarantee Terms.</p>
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
	registering: PropTypes.bool,
	registerSuccess: PropTypes.bool,
	onRegister: PropTypes.func.isRequired,
	toast: PropTypes.func.isRequired
};

const styles = {
	checkbox: {
		margin: '4 0 24'
	},
	terms: {
		textAlign: 'center'
	}
};

export default RegisterPage;

