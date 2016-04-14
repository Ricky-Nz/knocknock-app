import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getUserProfile, editUserProfile, editAvatar } from '../actions';
import ProfilePage from '../components/ProfilePage';

const loadingStateSelector = state => state.appState.changingUserProfile;

const dataSelector = state => state.user;

const mapStateToProps = createSelector(
	loadingStateSelector,
	dataSelector,
	(loading, user) => ({loading, user})
);

const mapActionToProps = (dispatch) => ({
	loadUser: () => {
		dispatch(getUserProfile());
	},
	updateUser: (args) => {
		dispatch(editUserProfile(args));
	},
	uploadAvatar: (content) => {
		dispatch(editAvatar(content));
	}
});

export default connect(mapStateToProps, mapActionToProps)(ProfilePage);