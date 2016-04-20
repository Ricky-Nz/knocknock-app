import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getUserProfile, editUserProfile, editAvatar, logout } from '../actions';
import ProfilePage from '../components/ProfilePage';

const loadingStateSelector = state => state.actionState.loadingUserProfile;

const updatingStateSelector = state => state.actionState.updatingUserProfile;

const dataSelector = state => state.user;

const mapStateToProps = createSelector(
	loadingStateSelector,
	updatingStateSelector,
	dataSelector,
	(loading, updating, user) => ({loading, updating, user})
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
	},
	logout: () => {
		dispatch(logout());
	}
});

export default connect(mapStateToProps, mapActionToProps)(ProfilePage);