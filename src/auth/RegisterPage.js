import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import IconPersonAdd from 'material-ui/svg-icons/social/person-add';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import { ActionBar, EditText } from '../app_widgets';

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
		if (!nextProps.registing&&this.props.registing&&nextProps.processSuccess) {
			this.props.logIn({
				email: this.refs.email.getValidValue(),
				password: this.refs.password.getValidValue()
			});
		} else if (!nextProps.logging&&this.props.logging) {
			if (nextProps.processSuccess) {
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
		const processing = this.props.logging || this.props.registing;
		const { enteredPassword, showPassword } = this.state;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title='Create New Account'
					leftMenu={<IconButton onClick={this.onBack}><IconBack/></IconButton>}/>
				<div className='flex flex-fill padding margin-horizontal'>
					<EditText ref='email' fullWidth={true} hintText='Email' disabled={processing}
						errorText='please enter a valid email address' verify='email'/>
					<EditText ref='phone' fullWidth={true} type='number' hintText='Phone' disabled={processing}
						errorText='please enter a valid phone number' verify='phonenumber'/>
					<EditText ref='password' type={showPassword?'text':'password'} fullWidth={true}
						hintText='Password' disabled={processing} errorText='Password is too short, try one with at least 8 characters'
						verify='password' onChange={this.onPasswordChange}/>
					<EditText ref='repeatPassword' type={showPassword?'text':'password'} fullWidth={true}
						hintText='Repeat password' disabled={processing} errorText='Password not match' verify={enteredPassword}/>
					<br/>
					<Checkbox checked={showPassword} disabled={processing}
						label='Show password' onCheck={this.onShowPasswordChange}/>
					<br/>
			    <RaisedButton label='Create Account' fullWidth={true} primary={true}
						icon={<IconPersonAdd/>} onClick={this.onRegisterClicked} disabled={processing}/>
					<div className='flex flex-fill flex-align-center flex-end padding-bottom'>
						<p className='text-center'>By signing up, I aggree to Knocknocks Terms of Service, Privacy Prolicy, Guest Refund Policy, and Host Guarantee Terms.</p>
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
	logging: PropTypes.bool,
	registing: PropTypes.bool,
	processSuccess: PropTypes.bool,
	register: PropTypes.func.isRequired,
	logIn: PropTypes.func.isRequired
};

export default RegisterPage;

