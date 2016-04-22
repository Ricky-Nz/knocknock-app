import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { updateAvatar } from './actions';
import ProfileAvatar from './ProfileAvatar';

const statusSelector = state => state.userStatus.processing;

const mapStateToProps = createSelector(
	statusSelector,
	(processing) => ({processing})
);

const mapActionToProps = dispatch => ({
	updateAvatar: () => {
		dispatch(updateAvatar());
	}
});

export default connect(mapStateToProps, mapActionToProps)(ProfileAvatar);