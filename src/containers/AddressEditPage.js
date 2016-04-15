import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createAddress, editAddress, toastMessage } from '../actions';
import AddressEditPage from '../components/AddressEditPage';

const updatingStateSelector = state => state.actionState.updatingAddress;

const updatingResultSelector = state => state.actionState.updatingAddressSuccess;

const addressesSelector = state => state.addresses;

const addressIdSelector = (state, {params}) => params.addressId;

const mapStateToProps = createSelector(
	updatingStateSelector,
	updatingResultSelector,
	addressesSelector,
	addressIdSelector,
	(editing, editSuccess, addresses, addressId) => {
		const index = addresses&&addresses.findIndex(address => address.id == addressId);
		return {
			editing,
			editSuccess,
			address: addresses&&addresses[index]
		};
	}
);

const mapActionToProps = (dispatch, props) => ({
	createOrEditAddress: (args) => {
		if (props.params.addressId) {
			dispatch(editAddress({id: props.params.addressId, ...args}));
		} else {
			dispatch(createAddress(args));
		}
	},
	toast: (message) => {
		dispatch(toastMessage(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(AddressEditPage);