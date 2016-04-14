import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/svg-icons/navigation/menu';
import IconEdit from 'material-ui/lib/svg-icons/editor/border-color';
import IconDone from 'material-ui/lib/svg-icons/action/done';
import TextField from 'material-ui/lib/text-field';
import CircularProgress from 'material-ui/lib/circular-progress';
import Avatar from 'material-ui/lib/avatar';
import Dropzone from 'react-dropzone';
import RaisedButton from 'material-ui/lib/raised-button';
import { LoadingProgress } from '../widgets';
import { red600 } from 'material-ui/lib/styles/colors';

class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = this.onUserChange(props.user);
		this.onFirstNameChange = this.onFirstNameChange.bind(this);
		this.onLastNameChange = this.onLastNameChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
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
	onSubmit() {
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
		const { loading, updating, user, onDrawerClick, logout } = this.props;

		return (
			<div className='flex flex-fill'>
				<AppBar title='My Profile'
					iconElementLeft={<IconButton onClick={onDrawerClick}><IconMenu/></IconButton>}
					iconElementRight={(loading||updating)?<CircularProgress size={0.5} color='white'/>:<IconButton onClick={this.onSubmit}><IconDone/></IconButton>}/>
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
						<TextField fullWidth={true} value={contactNo} disabled={true}
							floatingLabelText='Contact Number'/>
						<RaisedButton fullWidth={true} label='Logout' style={styles.logoutButton}
							backgroundColor={red600} labelColor='white' onClick={logout}/>
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

const styles = {
	logoutButton: {
		marginTop: 50
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