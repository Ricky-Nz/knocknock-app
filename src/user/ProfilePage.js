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
import { ActionBar, LoadingProgress } from '../widgets';
import { red600 } from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { EditText } from '../widgets';
import ProfileAvatarContaienr from './ProfileAvatarContaienr';

class ProfilePage extends Component {
	componentDidMount() {
		!this.props.profile&&!this.props.processing&&this.props.getProfile();
	}
	onComplete = () => {
		const firstName = this.refs.firstName.getValidValue();
		const lastName = this.refs.lastName.getValidValue();
		const email = this.refs.email.getValidValue();
		const contactNo = this.refs.contactNo.getValidValue();

		if (firstName === null || lastName === null
			|| email === null || contactNo === null) {
			return;
		}
	
		this.props.updateUser({
			email,
			contactNo,
			firstName,
			lastName
		});
	}
	onResetPassword = () => {
		this.context.router.push('/resetpassword');
	}
	render() {
		const { navCallback } = this.props.location.query;
		const { firstName, lastName, email, contactNo } = this.props.profile||{};

		return (
			<div className='flex flex-fill'>
				<ActionBar title='My Profile'
					leftMenu={<IconButton onClick={navCallback?this.props[navCallback]:this.context.router.goBack}>{navCallback?<IconMenu/>:<IconClose/>}</IconButton>}
					rightMenu={<IconButton onClick={this.onComplete}><IconDone/></IconButton>}/>
				<div className='flex flex-fill position-relative'>
					{(this.props.processing&&!profile)?<LoadingProgress/>:
						<div className='flex flex-fill scroll padding'>
							<ProfileAvatarContaienr/>
							<EditText ref='firstName' fullWidth={true} value={firstName}
								floatingLabelText='Fisrt Name' errorText='fist name can not be empty' verify='notempty'/>
							<EditText ref='lastName' fullWidth={true} value={lastName}
								floatingLabelText='Last Name' errorText='last name can not be empty' verify='notempty'/>
							<EditText ref='email' fullWidth={true} value={email} disabled={true}
								floatingLabelText='Email' errorText='please enter a valid email address' verify='email'/>
							<EditText ref='contactNo' fullWidth={true} type='number'
								value={contactNo} floatingLabelText='Contact Number'
								errorText='please enter a valid phone number' verify='phonenumber'/>
							<br/>
							<div className='flex flex-row flex-end'>
								<FlatButton label='Reset password' onClick={this.onResetPassword}/>
							</div>
							<br/><br/>
							<RaisedButton fullWidth={true} label='Logout'
								backgroundColor={red600} labelColor='white' onClick={this.props.startLogOut}/>
						</div>
					}
				</div>
			</div>
		);
	}
}

ProfilePage.propTypes = {
	processing: PropTypes.bool,
	profile: PropTypes.object,
	getProfile: PropTypes.func.isRequired,
	updateProfile: PropTypes.func.isRequired,
	startLogOut: PropTypes.func.isRequired
};

ProfilePage.contextTypes = {
  router: React.PropTypes.object
};

export default ProfilePage;