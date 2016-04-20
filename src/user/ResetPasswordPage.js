import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import Checkbox from 'material-ui/Checkbox';
import IconDone from 'material-ui/svg-icons/action/done';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { ActionBar, EditText } from '../widgets';

class ResetPasswordPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPassword: false,
			password: ''
		};
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onShowPasswordChange = this.onShowPasswordChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.resetResult&&!nextProps.resetting&&this.props.resetting) {
			this.context.router.goBack();
		}
	}
	onPasswordChange(event) {
		this.setState({password: event.target.value});
	}
	onShowPasswordChange() {
		this.setState({showPassword: !this.state.showPassword});
	}
	onSubmit() {
		const password = this.refs.password.getValidValue();
		const repeatPassword = this.refs.repeatPassword.getValidValue();

		if (password === null || repeatPassword === null) {
			return;
		}

		this.props.resetPassword(password);
	}
	render() {
		const { resetting } = this.props;
		const { password, showPassword } = this.state;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title='Reset Password' running={resetting}
					onLeftMenuClicked={this.context.router.goBack} running={resetting}
					leftIcon={<IconArrowBack/>} rightIcon={<IconDone/>} onRightMenuClicked={this.onSubmit}/>
				<div className='flex flex-fill padding margin-horizontal'>
					<EditText ref='password' type={showPassword?'text':'password'} fullWidth={true}
						hintText='Password' disabled={resetting} errorText='Password is too short, try one with at least 8 characters'
						verify={/^\w{8,}$/} onChange={this.onPasswordChange}/>
					<EditText ref='repeatPassword' type={showPassword?'text':'password'} fullWidth={true}
						hintText='Repeat password' disabled={resetting}
						errorText='Password not match' verify={password}/>
					<br/>
					<Checkbox checked={showPassword} disabled={resetting}
						label='Show password' onCheck={this.onShowPasswordChange}/>
				</div>
			</div>
		);
	}
}

ResetPasswordPage.contextTypes = {
  router: React.PropTypes.object
};

ResetPasswordPage.propTypes = {
	resetting: PropTypes.bool,
	resetResult: PropTypes.bool,
	resetPassword: PropTypes.func.isRequired
};

export default ResetPasswordPage;

