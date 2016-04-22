import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconEdit from 'material-ui/svg-icons/editor/border-color';
import IconDone from 'material-ui/svg-icons/action/done';
import IconClose from 'material-ui/svg-icons/navigation/close';
import CircularProgress from 'material-ui/CircularProgress';
import Avatar from 'material-ui/Avatar';
import Dropzone from 'react-dropzone';
import RaisedButton from 'material-ui/RaisedButton';
import { red600 } from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { ActionBar, LoadingProgress, EditText } from '../app_widgets';
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
			<div className='flex flex-fill page'>
				<ActionBar title='Setup Profile'
					leftMenu={<IconButton onClick={this.context.router.goBack}><IconClose/></IconButton>}
					rightMenu={<IconButton onClick={this.onComplete}><IconDone/></IconButton>}/>
				<div className='flex flex-fill position-relative'>
					<div className='flex flex-fill scroll padding'>
						<ProfileAvatarContainer/>
						<EditText ref='firstName' fullWidth={true}
							floatingLabelText='Fisrt Name' errorText='fist name can not be empty' verify='notempty'/>
						<EditText ref='lastName' fullWidth={true}
							floatingLabelText='Last Name' errorText='last name can not be empty' verify='notempty'/>
					</div>
				</div>
			</div>
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