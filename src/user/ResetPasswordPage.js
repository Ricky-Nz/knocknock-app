import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import Checkbox from 'material-ui/Checkbox';
import IconDone from 'material-ui/svg-icons/action/done';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import { ActionBar, EditText } from '../widgets';

class ResetPasswordPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPassword: false,
			password: ''
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.resetResult&&!nextProps.resetting&&this.props.resetting) {
			this.context.router.goBack();
		}
	}
	onPasswordChange = (event) => {
		this.setState({password: event.target.value});
	}
	onShowPasswordChange = (event, checked) => {
		this.setState({showPassword: checked});
	}
	onSubmit = () => {
		const password = this.refs.password.getValidValue();
		const repeatPassword = this.refs.repeatPassword.getValidValue();

		if (password === null || repeatPassword === null) {
			return;
		}

		this.props.resetPassword(password);
	}
	render() {
		const { processing } = this.props;
		const { password, showPassword } = this.state;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title='Reset Password'
					leftMenu={<IconButton onClick={this.context.router.goBack}><IconBack/></IconButton>}
					rightMenu={<IconButton onClick={this.onSubmit}><IconDone/></IconButton>}/>
				<div className='flex flex-fill padding margin-horizontal'>
					<EditText ref='password' type={showPassword?'text':'password'} fullWidth={true}
						hintText='Password' disabled={processing} errorText='Password is too short, try one with at least 8 characters'
						verify='password' onChange={this.onPasswordChange}/>
					<EditText ref='repeatPassword' type={showPassword?'text':'password'} fullWidth={true}
						hintText='Repeat password' disabled={processing}
						errorText='Password not match' verify={password}/>
					<br/>
					<Checkbox checked={showPassword} disabled={processing}
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
	processing: PropTypes.bool,
	processSuccess: PropTypes.bool,
	resetPassword: PropTypes.func.isRequired
};

export default ResetPasswordPage;

