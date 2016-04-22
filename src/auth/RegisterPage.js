import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import IconPersonAdd from 'material-ui/svg-icons/social/person-add';
import IconClose from 'material-ui/svg-icons/navigation/close';
import { Page, LoadingProgress, EditText, NoteText, COLOR_GRAY } from '../app_widgets';

class RegisterPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPassword: false,
			enteredPassword: ''
		};
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
	onBack = () => {
		this.context.router.replace('/login');
	}
	onShowPasswordChange = () => {
		this.setState({showPassword: !this.state.showPassword});
	}
	onPasswordChange = (event) => {
		this.setState({enteredPassword: event.target.value});
	}
	onRegister = () => {
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
			<Page title='Create New Account'
				navCallback={this.props.location.query.navCallback}>
				<div className='flex flex-fill padding margin-horizontal'>
					<EditText ref='email' fullWidth={true} hintText='Email'
						errorText='please enter a valid email address' verify='email'/>
					<EditText ref='phone' fullWidth={true} type='number' hintText='Phone'
						errorText='please enter a valid phone number' verify='phonenumber'/>
					<EditText ref='password' type={showPassword?'text':'password'} fullWidth={true}
						hintText='Password' errorText='Password is too short, try one with at least 8 characters'
						verify='password' onChange={this.onPasswordChange}/>
					<EditText ref='repeatPassword' type={showPassword?'text':'password'} fullWidth={true}
						hintText='Repeat password' errorText='Password not match' verify={enteredPassword}/>
					<br/>
					<Checkbox checked={showPassword}
						label='Show password' onCheck={this.onShowPasswordChange}/>
					<br/>
			    <RaisedButton label='Create Account' fullWidth={true} primary={true}
						icon={<IconPersonAdd/>} onClick={this.onRegister} disabled={processing}/>
					{processing&&<LoadingProgress/>}
					<div className='flex flex-fill flex-align-center flex-end padding-bottom'>
						<NoteText>By signing up, I aggree to Knocknocks Terms of Service, Privacy Prolicy, Guest Refund Policy, and Host Guarantee Terms.</NoteText>
					</div>
				</div>
			</Page>
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

