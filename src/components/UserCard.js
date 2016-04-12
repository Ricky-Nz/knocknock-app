import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/lib/avatar';
import CircularProgress from 'material-ui/lib/circular-progress';
import ListItem from 'material-ui/lib/lists/list-item';
import IconAccountCircle from 'material-ui/lib/svg-icons/action/account-circle';
import { deepOrange500 } from 'material-ui/lib/styles/colors';

class UserCard extends Component {
	componentDidMount() {
		!this.props.user&&this.props.loadUser();
	}
	render() {
		const { loading, user, onClick } = this.props;

		if (loading) {
			return (
				<div className='flex flex-center flex-align-center' style={styles.container}>
					<CircularProgress size={0.5} color='white'/>
				</div>
			);
		} else {
			return (
				<div className='flex flex-column flex-center' style={styles.container}>
					<Avatar style={styles.avatar} src={user&&user.avatarMd} size={90}/>
				  <ListItem rightIcon={<IconAccountCircle color='white'/>} onClick={onClick}
				  	primaryText={
				  		(user&&(user.firstName||user.lastName))&&<p style={styles.text}>{user.firstName} {user.lastName}</p>
				  	}
				    secondaryText={
				    	<p style={styles.text}>{user&&(user.email||user.contact)}</p>
				    } secondaryTextLines={2}/>
				</div>
			);
		}
	}
}

UserCard.propTypes = {
	loading: PropTypes.bool,
	user: PropTypes.object,
	loadUser: PropTypes.func.isRequired
};

const styles = {
	container: {
		backgroundColor: deepOrange500
	},
	avatar: {
		margin: '16 16 8 16'
	},
	text: {
		color: 'white',
		fontSize: '1.1em'
	}
};

export default UserCard;