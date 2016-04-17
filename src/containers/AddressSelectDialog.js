import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getUserAddresses } from '../actions';
import AddressSelectDialog from '../components/AddressSelectDialog';

const loadingStateSelector = state => state.actionState.loadingAddresses;

const dataSelector = state => state.addresses;

const mapStateToProps = createSelector(
	loadingStateSelector,
	dataSelector,
	(loading, addresses) => ({loading, addresses})
);

const mapActionToProps = (dispatch) => ({
	loadUserAddresses: () => {
		dispatch(getUserAddresses());
	}
});

export default connect(mapStateToProps, mapActionToProps)(AddressSelectDialog);