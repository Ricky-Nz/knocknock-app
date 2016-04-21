import React, { Component, PropTypes } from 'react';

class ProfileAvatar extends Component {
	onSelectFile = (files) => {
		if (files&&files[0]) {
			if (files[0].type.startsWith('image')) {
				this.props.updateAvatar(files[0]);
			}
		}
  }
	render() {
		return (
			<div style={styles.avatarContainer} className='position-relative'>
				<Avatar src={seletFile?seletFile.preview:this.props.src} size={120}/>
				<IconEdit style={styles.avatarEditIcon}/>
        <Dropzone style={styles.dropZone} multiple={false} accept='image/*' onDrop={this.onSelectFile}/>
			</div>
		);
	}
}

ProfileAvatar.propTypes = {
	src: PropTypes.string,
	updateAvatar: PropTypes.func.isRequired
};

const styles = {
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

export default ProfileAvatar;