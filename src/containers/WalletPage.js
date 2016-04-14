import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getUserProfile, toastMessage } from '../actions';
import WalletPage from '../components/WalletPage';

const loadingStateSelector = state => state.actionState.updatingUserProfile;

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
	toast: (message) => {
		dispatch(toastMessage(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(WalletPage);