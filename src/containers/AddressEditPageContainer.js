import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createAddress, editAddress, toastMessage } from '../actions';
import AddressEditPage from '../components/AddressEditPage';

const loadingStateSelector = state => state.appState.changingAddress;

const addressesSelector = state => state.addresses;

const addressIdSelector = (state, props) => props.params.addressId;

const mapStateToProps = createSelector(
	loadingStateSelector,
	addressesSelector,
	addressIdSelector,
	(editing, addresses, addressId) => {
		const index = addresses.findIndex(address => address.id == addressId);
		return {
			editing,
			address: addresses[index]
		};
	}
);

const mapActionToProps = (dispatch, props) => ({
	createOrEditAddress: (args) => {
		if (props.params.addressId) {
			dispatch(editAddress({addressId: props.params.addressId, ...args}));
		} else {
			dispatch(createAddress(args));
		}
	},
	toast: (message) => {
		dispatch(toastMessage(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(AddressEditPage);