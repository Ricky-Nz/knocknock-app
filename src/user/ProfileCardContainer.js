import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getUserProfile } from '../actions';
import UserCard from '../components/UserCard';

const loadingStateSelector = state => state.actionState.loadingUserProfile;

const dataSelector = state => state.user;

const mapStateToProps = createSelector(
	loadingStateSelector,
	dataSelector,
	(loading, user) => ({loading, user})
);

const mapActionToProps = (dispatch) => ({
	loadUser: () => {
		dispatch(getUserProfile());
	}
});

export default connect(mapStateToProps, mapActionToProps)(UserCard);