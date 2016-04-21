import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import CircularProgress from 'material-ui/CircularProgress';
import { ListItem } from 'material-ui/List';
import IconAccountCircle from 'material-ui/svg-icons/action/account-circle';
import { PRIMARY_COLOR } from '../app_widgets';

class ProfileCard extends Component {
	componentDidMount() {
		!this.props.profile&&!this.props.processing&&this.props.getProfile();
	}
	render() {
		const { processing, profile, onClick } = this.props;

		if (processing) {
			return (
				<div className='flex flex-center flex-align-center' style={styles.container}>
					<CircularProgress size={0.5} color='white'/>
				</div>
			);
		} else {
			const { avatarMd, firstName, lastName, email, contact } = profile||{};
			return (
				<div className='flex flex-column flex-center' style={styles.container}>
					<Avatar style={styles.avatar} src={avatarMd} size={90}
						onClick={onClick}/>
				  <ListItem rightIcon={<IconAccountCircle color='white'/>} onClick={onClick}
				  	primaryText={(firstName||lastName)&&<p style={styles.text}>{firstName} {lastName}</p>}
				    secondaryText={<p style={styles.text}>{email||contact}</p>}/>
				</div>
			);
		}
	}
}

ProfileCard.propTypes = {
	processing: PropTypes.bool,
	profile: PropTypes.object,
	getProfile: PropTypes.func.isRequired
};

const styles = {
	container: {
		backgroundColor: PRIMARY_COLOR
	},
	avatar: {
		margin: '16 16 8 16'
	},
	text: {
		color: 'white'
	}
};

export default ProfileCard;