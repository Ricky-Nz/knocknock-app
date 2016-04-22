import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconCheck from 'material-ui/svg-icons/navigation/check';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { PRIMARY_COLOR, LoadingProgress, EditText } from '../app_widgets';
import ForgotPasswordDialogContainer from './ForgotPasswordDialogContainer';

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = { showPassword: false };
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.loggingin&&this.props.loggingin&&nextProps.loginSuccess) {
			this.context.router.replace('/home');
		} else if (!nextProps.forgoting&&this.props.forgoting&&this.state.dialogShow) {
			this.setState({dialogShow: false});
		}
	}
	onShowPasswordChange = (e, checked) => {
		this.setState({showPassword: checked});
	}
	onRegister = () => {
		this.context.router.replace('/register');
	}
	onLogin = () => {
		const email = this.refs.email.getValidValue();
		const password = this.refs.email.getValidValue();
		if (!email || !password) {
			return;
		}

		this.props.login({email, password});
	}
	onForgotPassword = () => {
		const email = this.refs.email.getValidValue();
		if (!email) {
			return;
		}

		this.props.preForgotPassword(email);
	}
	render() {
		const { processing } = this.props;
		const { showPassword, dialogShow } = this.state;

		return (
			<div className='flex flex-fill page'>
				<div style={styles.title}>Knocknock</div>
				<div className='flex flex-fill padding-horizontal margin-horizontal'>
					<EditText ref='email' fullWidth={true} disabled={processing}
						floatingLabelText='Email' errorText='please enter a valid email address' verify='email'/>
					<EditText ref='password' type={showPassword?'text':'password'} fullWidth={true}
						disabled={processing} floatingLabelText='Password' errorText='password can not be empty' verify='notempty'/>
					<br/>
			    <Checkbox checked={showPassword} disabled={processing}
						label='Show password' onCheck={this.onShowPasswordChange}/>
					<br/>
			    <RaisedButton label='Log In' primary={true} fillWidth={true}
						icon={<IconCheck/>} onClick={this.onLogin} disabled={processing}/>
					<br/>
					{processing&&<LoadingProgress/>}
					<div className='flex flex-align-center flex-fill flex-end padding-vertical margin-vertical'>
						<FlatButton label='Create New Knocknock Account' primary={true}
							onClick={this.onRegister}/>
						<FlatButton label='Forgot Password?' onClick={this.onForgotPassword}/>
					</div>
				</div>
				<ForgotPasswordDialogContainer/>
			</div>
		);
	}
}

LoginPage.contextTypes = {
  router: React.PropTypes.object
};

LoginPage.propTypes = {
	processing: PropTypes.bool,
	processResult: PropTypes.bool,
	logIn: PropTypes.func.isRequired,
	preForgotPassword: PropTypes.func.isRequired
};

const styles = {
	title: {
		marginTop: 56,
		marginBottom: 4,
		fontSize: '3em',
		color: PRIMARY_COLOR,
		textAlign: 'center'
	}
};

export default LoginPage;

