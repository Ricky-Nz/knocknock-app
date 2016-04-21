import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getProfile } from '../actions';
import ProfileCard from './ProfileCard';

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
	}
});

export default connect(mapStateToProps, mapActionToProps)(ProfileCard);