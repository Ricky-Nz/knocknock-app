import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconEdit from 'material-ui/svg-icons/editor/border-color';
import IconDone from 'material-ui/svg-icons/action/done';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import Avatar from 'material-ui/Avatar';
import Dropzone from 'react-dropzone';
import RaisedButton from 'material-ui/RaisedButton';
import { LoadingProgress } from '../widgets';
import { red600 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = this.onUserChange(props.user);
		this.onFirstNameChange = this.onFirstNameChange.bind(this);
		this.onLastNameChange = this.onLastNameChange.bind(this);
		this.onResetPassword = this.onResetPassword.bind(this);
		this.onUpdateProfile = this.onUpdateProfile.bind(this);
		this.onLogout = this.onLogout.bind(this);
		this.onSelectFile = this.onSelectFile.bind(this);
	}
	componentDidMount() {
		!this.props.user&&this.props.loadUser();
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.user !== this.props.user) {
			this.setState(this.onUserChange(nextProps.user));
		}
	}
	onUserChange(user) {
		if (!user) {
			return {};
		}

		return {
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			contactNo: user.contactNo
		};
	}
	onFirstNameChange(event) {
		this.setState({firstName: event.target.value});
	}
	onLastNameChange(event) {
		this.setState({lastName: event.target.value});
	}
	onUpdateProfile() {
		if (this.state.seletFile) {
			this.props.uploadAvatar(this.state.seletFile);
		}

		const { firstName, lastName } = this.props.user;
		if (firstName !== this.state.firstName ||
			lastName !== this.state.lastName) {
			this.props.updateUser({
				email: this.state.email,
				contactNo: this.state.contactNo,
				firstName: this.state.firstName,
				lastName: this.state.lastName
			});
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
			} else {

			}
		}
  }
	render() {
		const { firstName, lastName, email, contactNo, seletFile } = this.state;
		const { loading, updating, user, onDrawerClick } = this.props;

		return (
			<div className='flex flex-fill'>
				<AppBar title='My Profile'
					iconElementLeft={<IconButton onClick={onDrawerClick}><IconMenu/></IconButton>}
					iconElementRight={(loading||updating)?<CircularProgress size={0.5} color='white'/>
						:<IconButton onClick={this.onUpdateProfile}><IconDone/></IconButton>}/>
				{(loading&&!user)?<LoadingProgress/>:
					<div className='padding'>
						<div className='flex flex-center flex-align-center padding'>
							<div className='position-relative'>
								<Avatar src={seletFile?seletFile.preview:(user&&user.avatarMd)} size={120}/>
								<IconEdit style={styles.avatarEditIcon}/>
		            <Dropzone style={styles.dropZone} multiple={false} accept='image/*' onDrop={this.onSelectFile}/>
							</div>
						</div>
						<TextField fullWidth={true} value={firstName}
							floatingLabelText='Fisrt Name' onChange={this.onFirstNameChange}/>
						<TextField fullWidth={true} value={lastName}
							floatingLabelText='Last Name' onChange={this.onLastNameChange}/>
						<TextField fullWidth={true} value={email} disabled={true}
							floatingLabelText='Email'/>
						<TextField fullWidth={true} value={contactNo}
							floatingLabelText='Contact Number'/>
						<div className='flex flex-row flex-end'>
							<FlatButton label='Reset password' onClick={this.onResetPassword}/>
						</div>
						<RaisedButton fullWidth={true} label='Logout' style={styles.logoutButton}
							backgroundColor={red600} labelColor='white' onClick={this.onLogout}/>
					</div>
				}
			</div>
		);
	}
}

ProfilePage.propTypes = {
	onDrawerClick: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	updating: PropTypes.bool,
	user: PropTypes.object,
	loadUser: PropTypes.func.isRequired,
	updateUser: PropTypes.func.isRequired,
	uploadAvatar: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired
};

ProfilePage.contextTypes = {
  router: React.PropTypes.object
};

const styles = {
	logoutButton: {
		marginTop: 60
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
	}
};

export default ProfilePage;