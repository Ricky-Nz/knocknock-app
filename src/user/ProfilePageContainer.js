import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getProfile, updateProfile } from './actions';
import { startLogOut } from '../auth';
import ProfilePage from '../components/ProfilePage';

const statusSelector = state => state.userStatus.processing;

const dataSelector = state => state.user;

const mapStateToProps = createSelector(
	statusSelector,
	dataSelector,
	(processing, profile) => ({processing, profile})
);

const mapActionToProps = (dispatch) => ({
	getProfile: () => {
		dispatch(getProfile());
	},
	updateProfile: (args) => {
		dispatch(updateProfile(args));
	},
	startLogOut: () => {
		dispatch(startLogOut());
	}
});

export default connect(mapStateToProps, mapActionToProps)(ProfilePage);