import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import IconDone from 'material-ui/svg-icons/action/done';
import { Page, EditText } from '../app_widgets';
import ProfileAvatarContainer from './ProfileAvatarContainer';

class SetupPage extends Component {
	onComplete = () => {
		const firstName = this.refs.firstName.getValidValue();
		const lastName = this.refs.lastName.getValidValue();
		if (firstName === null || lastName === null) {
			return;
		}

		this.props.updateProfile({
			firstName,
			lastName
		});
		this.context.router.goBack();
	}
	render() {
		return (
			<Page title='Setup Profile'
				navCallback={this.props.location.query.navCallback}
				rightMenu={<IconButton onClick={this.onComplete}><IconDone/></IconButton>}>
				<div className='flex flex-fill scroll padding'>
					<div className='flex flex-align-center padding'>
						<ProfileAvatarContainer/>
					</div>
					<EditText ref='firstName' fullWidth={true}
						floatingLabelText='Fisrt Name' errorText='fist name can not be empty' verify='notempty'/>
					<EditText ref='lastName' fullWidth={true}
						floatingLabelText='Last Name' errorText='last name can not be empty' verify='notempty'/>
				</div>
			</Page>
		);
	}
}

SetupPage.propTypes = {
	updateProfile: PropTypes.func.isRequired
};

SetupPage.contextTypes = {
  router: React.PropTypes.object
};

export default SetupPage;