import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import Checkbox from 'material-ui/Checkbox';
import IconDone from 'material-ui/svg-icons/action/done';

class ResetPasswordPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPassword: false,
			password: '',
			repeatPassword: ''
		};
		this.onPasswordChange = this.onPasswordChange.bind(this);
		this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onShowPasswordChange = this.onShowPasswordChange.bind(this);
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
	onSubmit() {
		let { password, repeatPassword } = this.state;

		if (!password || password.length < 8) {
			this.props.toast('Password is too short, try one with at least 8 characters');
			return;
		}

		if (password !== repeatPassword) {
			this.props.toast('Password not match, please reenter');
			return;
		}

		this.props.resetPassword(password);
	}
	render() {
		const { resetting } = this.props;
		const { password, repeatPassword, showPassword } = this.state;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title='Reset password' running={resetting}
					onLeftMenuClicked={this.context.router.goBack} running={loading||paying}
					rightIcon={<IconDone/>} onRightMenuClicked={this.onSubmit}/>
				<div className='flex flex-fill padding margin-horizontal'>
					<TextField type={showPassword?'text':'password'} fullWidth={true} value={password}
						hintText='new password' onChange={this.onPasswordChange} disabled={resetting}/>
					<TextField type={showPassword?'text':'password'} fullWidth={true} value={repeatPassword}
						hintText='repeat password' onChange={this.onRepeatPasswordChange} disabled={resetting}/>
					<Checkbox style={styles.checkbox} checked={showPassword} disabled={resetting}
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
	resetPassword: PropTypes.func.isRequired
};

const styles = {
	checkbox: {
		margin: '4 0 24'
	},
	terms: {
		textAlign: 'center'
	}
};

export default ResetPasswordPage;

