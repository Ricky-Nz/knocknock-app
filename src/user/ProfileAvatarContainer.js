import { connect } from 'react-redux';
import { updateAvatar } from './actions';
import ProfileAvatar from './ProfileAvatar';

const mapActionToProps = (dispatch) => ({
	updateAvatar: () => {
		dispatch(updateAvatar());
	}
});

export default connect(mapStateToProps, mapActionToProps)(ProfileAvatar);