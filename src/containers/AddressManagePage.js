import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getUserAddresses } from '../actions';
import AddressManagePage from '../components/AddressManagePage';

const loadingStateSelector = state => state.actionState.loadingAddresses;

const mapStateToProps = createSelector(
	loadingStateSelector,
	(loading) => ({loading})
);

const mapActionToProps = (dispatch) => ({
	loadUserAddresses: () => {
		dispatch(getUserAddresses(true));
	}
});

export default connect(mapStateToProps, mapActionToProps)(AddressManagePage);