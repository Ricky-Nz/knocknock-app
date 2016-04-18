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

class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = {showDialog: false};
		this.onUpdateProfile = this.onUpdateProfile.bind(this);
		this.onLogout = this.onLogout.bind(this);
		this.onSelectFile = this.onSelectFile.bind(this);
		this.onToggleDialog = this.onToggleDialog.bind(this);
	}
	componentDidMount() {
		!this.props.user&&!this.props.loading&&this.props.loadUser();
	}
	onUpdateProfile() {
		if (this.state.seletFile) {
			this.props.uploadAvatar(this.state.seletFile);
			this.setState({seletFile: null});
		}

		const firstName = this.refs.firstName.getValidValue();
		const lastName = this.refs.lastName.getValidValue();
		const user = this.props.user;

		if (this.props.location.pathname === '/setup') {
			if (firstName || lastName) {
				this.props.updateUser({
					firstName,
					lastName
				});
			}

			this.context.router.goBack();
		} else if (user) {
			const email = this.refs.email.getValidValue();
			const contactNo = this.refs.contactNo.getValidValue();
		
			if (firstName !== user.firstName
				|| lastName !== user.lastName
				|| email !== user.email
				|| contactNo !== user.contactNo) {
				this.props.updateUser({
					email,
					contactNo,
					firstName,
					lastName
				});
			}
		}
	}
	onResetPassword() {
		this.context.router.push('/resetpassword');
	}
	onLogout() {
		this.props.logout();
		this.context.router.replace('/login');
	}
	onSelectFile(files) {
		if (files&&files[0]) {
			if (files[0].type.startsWith('image')) {
				this.setState({seletFile: files[0]});
			}
		}
  }
  onToggleDialog() {
  	this.setState({showDialog: !this.state.showDialog});
  }
	render() {
		const { showDialog, seletFile } = this.state;
		const { loading, updating, user, onMenuClick } = this.props;
		const isSetup = this.props.location.pathname === '/setup';

		return (
			<div className='flex flex-fill'>
				<ActionBar title={isSetup?'Setup Profile':'My Profile'} leftIcon={isSetup?<IconClose/>:<IconMenu/>}
					onLeftMenuClicked={onMenuClick||this.context.router.goBack}
					rightIcon={<IconDone/>} onRightMenuClicked={this.onUpdateProfile} running={loading||updating}/>
				<div className='flex flex-fill position-relative'>
					{(loading&&!user)?<LoadingProgress/>:
						<div className='flex flex-fill scroll padding'>
							<div>
								<div style={styles.avatarContainer} className='position-relative'>
									<Avatar src={seletFile?seletFile.preview:(user&&user.avatarMd)} size={120}/>
									<IconEdit style={styles.avatarEditIcon}/>
			            <Dropzone style={styles.dropZone} multiple={false} accept='image/*' onDrop={this.onSelectFile}/>
								</div>
							</div>
							<EditText ref='firstName' fullWidth={true} value={user&&user.firstName}
								floatingLabelText='Fisrt Name'/>
							<EditText ref='lastName' fullWidth={true} value={user&&user.lastName}
								floatingLabelText='Last Name'/>
							{!isSetup&&
								<EditText ref='email' fullWidth={true} value={user&&user.email} disabled={true}
									floatingLabelText='Email'/>
							}
							{!isSetup&&
								<EditText ref='contactNo' fullWidth={true} value={user&&user.contactNo}
									floatingLabelText='Contact Number'/>
							}
							{!isSetup&&
								<div className='flex flex-row flex-end'>
									<FlatButton label='Reset password' onClick={this.onResetPassword}/>
								</div>
							}
							{!isSetup&&
								<RaisedButton fullWidth={true} label='Logout' style={styles.logoutButton}
									backgroundColor={red600} labelColor='white' onClick={this.onToggleDialog}/>
							}
						</div>
					}
				</div>
        <Dialog title='Log out?' actions={[
	        	<FlatButton label='Cancel' onClick={this.onToggleDialog}/>,
	      		<FlatButton label='Log out' primary={true} onClick={this.onLogout}/>
        	]} modal={false}
          open={showDialog} onRequestClose={this.onToggleDialog}/>
			</div>
		);
	}
}

ProfilePage.propTypes = {
	loading: PropTypes.bool,
	updating: PropTypes.bool,
	user: PropTypes.object,
	loadUser: PropTypes.func.isRequired,
	updateUser: PropTypes.func.isRequired,
	uploadAvatar: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
	onMenuClick: PropTypes.func
};

ProfilePage.contextTypes = {
  router: React.PropTypes.object
};

const styles = {
	logoutButton: {
		marginTop: 40
	},
	dropZone: {
		height: 120,
		width: 120,
		position: 'absolute',
		top: 0,
		left: 0
	},
	avatarEditIcon: {
		position: 'absolute',
		bottom: 0,
		right: 0
	},
	avatarContainer: {
		height: 120,
		width: 120,
		margin: 'auto'
	}
};

export default ProfilePage;