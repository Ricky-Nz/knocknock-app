import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import IconPersonAdd from 'material-ui/svg-icons/social/person-add';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { ActionBar, EditText } from '../widgets';

class RegisterPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPassword: false,
			enteredPassword: ''
		};
		this.onBack = this.onBack.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onRegisterClicked = this.onRegisterClicked.bind(this);
		this.onShowPasswordChange = this.onShowPasswordChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.registering&&this.props.registering&&nextProps.registerSuccess) {
			this.props.login({
				username: this.refs.email.getValidValue(),
				password: this.refs.password.getValidValue()
			});
		} else if (!nextProps.loggingin&&this.props.loggingin) {
			if (nextProps.logginginSuccess) {
				this.context.router.replace('/home');
				this.context.router.push('/setup');
			} else {
				this.context.router.replace('/login');
			}
		}
	}
	onBack() {
		this.context.router.replace('/login');
	}
	onShowPasswordChange() {
		this.setState({showPassword: !this.state.showPassword});
	}
	onPasswordChange(event) {
		this.setState({enteredPassword: event.target.value});
	}
	onRegisterClicked() {
		const email = this.refs.email.getValidValue();
		const phone = this.refs.phone.getValidValue();
		const password = this.refs.password.getValidValue();
		const repeatPassword = this.refs.repeatPassword.getValidValue();

    if (!email || !phone || !password || !repeatPassword) {
			return;
    }

		this.props.register({
			email,
			phone,
			password
		});
	}
	render() {
		const { registering } = this.props;
		const { enteredPassword, showPassword } = this.state;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title='Create New Account' running={registering}
					leftIcon={<IconArrowBack/>} onLeftMenuClicked={this.onBack}/>
				<div className='flex flex-fill padding margin-horizontal'>
					<EditText ref='email' fullWidth={true} hintText='Email' disabled={registering} errorText='please enter a valid email address'
						verify={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}/>
					<EditText ref='phone' fullWidth={true} type='number' hintText='Phone' disabled={registering}
						errorText='please enter a valid phone number' verify={/^[0-9]{8,8}$/}/>
					<EditText ref='password' type={showPassword?'text':'password'} fullWidth={true}
						hintText='Password' disabled={registering} errorText='Password is too short, try one with at least 8 characters'
						verify={/^\w{8,}$/} onChange={this.onPasswordChange}/>
					<EditText ref='repeatPassword' type={showPassword?'text':'password'} fullWidth={true}
						hintText='Repeat password' disabled={registering}
						errorText='Password not match' verify={enteredPassword}/>
					<Checkbox checked={showPassword} disabled={registering}
						label='Show password' onCheck={this.onShowPasswordChange}/>
					<br/>
			    <RaisedButton label='Create Account' fullWidth={true} primary={true}
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
	loggingin: PropTypes.bool,
	logginginSuccess: PropTypes.bool,
	register: PropTypes.func.isRequired,
	login: PropTypes.func.isRequired,
	toast: PropTypes.func.isRequired
};

const styles = {
	terms: {
		textAlign: 'center'
	}
};

export default RegisterPage;

