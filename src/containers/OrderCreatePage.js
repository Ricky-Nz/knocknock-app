import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createOrder, getOrders, recordLastUsedAddress, toastMessage } from '../actions';
import OrderCreatePage from '../components/OrderCreatePage';

const defaultAddressSelector = state => state.settings.address;

const defaultPickupTimeSelector = state => state.settings.pickupTime;

const defaultNoteSelector = state => state.settings.note;

const lastUsedAddressSelector = state => state.settings.lastUsedAddress;

const creatingStateSelector = state => state.actionState.creatingOrder;

const resultSelector = state => state.actionState.creatingOrderSuccess;

const addressesSelector = state => state.addresses;

const mapStateToProps = createSelector(
	defaultAddressSelector,
	defaultPickupTimeSelector,
	defaultNoteSelector,
	lastUsedAddressSelector,
	creatingStateSelector,
	resultSelector,
	addressesSelector,
	(defaultAddress, defaultPickupTime, defaultNote, lastUsedAddress, creating, success, addresses) =>
		({defaultAddress, defaultPickupTime, defaultNote, lastUsedAddress, creating, success, addresses})
);

const mapActionToProps = (dispatch, props) => ({
	createOrder: (args) => {
		dispatch(createOrder(args));
	},
	refreshOrders: () => {
		dispatch(getOrders());
	},
	recordLastUsedAddress: (address) => {
		dispatch(recordLastUsedAddress(address));
	},
	toast: (message) => {
		dispatch(toastMessage(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(OrderCreatePage);