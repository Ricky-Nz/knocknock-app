import React, { Component, PropTypes } from 'react';
import Avatar from 'material-ui/Avatar';
import IconEdit from 'material-ui/svg-icons/image/edit';
import Dropzone from 'react-dropzone';

class ProfileAvatar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.processing&&!this.props.processing&&this.state.seletFile) {
			this.props.updateAvatar(this.state.seletFile);
			this.setState({seletFile: null});
		}
	}
	onSelectFile = (files) => {
		if (files&&files[0]) {
			if (files[0].type.startsWith('image')) {
				this.setState({seletFile: files[0]});
			}
		}
  }
	render() {
		const seletFile = this.state.seletFile;

		return (
			<div style={styles.container} className='position-relative'>
				<Avatar src={seletFile?seletFile.preview:this.props.src} size={120}/>
        <Dropzone style={styles.dropZone} multiple={false} accept='image/*' onDrop={this.onSelectFile}/>
        <IconEdit style={styles.editIcon}/>
			</div>
		);
	}
}

ProfileAvatar.propTypes = {
	src: PropTypes.string,
	processing: PropTypes.bool,
	updateAvatar: PropTypes.func.isRequired
};

const styles = {
	container: {
		height: 120,
		width: 120
	},
	dropZone: {
		height: 120,
		width: 120,
		position: 'absolute',
		top: 0,
		left: 0
	},
	editIcon: {
		position: 'absolute',
		bottom: 0,
		right: 0
	}
};

export default ProfileAvatar;