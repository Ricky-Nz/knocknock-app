import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/lib/avatar';
import CircularProgress from 'material-ui/lib/circular-progress';

class UserCard extends Component {
	componentDidMount() {
		!this.props.user&&this.props.loadUser();
	}
	render() {
		const { loading, user } = this.props;

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
					{(user&&(user.firstName||user.lastName))&&<p style={styles.text}>{user.firstName} {user.lastName}</p>}
					<p style={styles.text}>{user&&(user.email||user.contact)}</p>
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
		backgroundColor: '#FF5722',
		padding: '16px'
	},
	avatar: {
		marginBottom: '8px'
	},
	text: {
		color: 'white',
		fontSize: '1.2em'
	}
};

export default UserCard;