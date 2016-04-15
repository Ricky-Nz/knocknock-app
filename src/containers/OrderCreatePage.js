import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createOrder, getOrders, toastMessage } from '../actions';
import OrderCreatePage from '../components/OrderCreatePage';

const defaultAddressSelector = state => state.settings.address;

const defaultPickupTimeSelector = state => state.settings.pickupTime;

const defaultNoteSelector = state => state.settings.note;

const creatingStateSelector = state => state.actionState.creatingOrder;

const resultSelector = state => state.actionState.creatingOrderSuccess;

const mapStateToProps = createSelector(
	defaultAddressSelector,
	defaultPickupTimeSelector,
	defaultNoteSelector,
	creatingStateSelector,
	resultSelector,
	(defaultAddress, defaultPickupTime, defaultNote, creating, success) =>
		({defaultAddress, defaultPickupTime, defaultNote, creating, success})
);

const mapActionToProps = (dispatch, props) => ({
	createOrder: (args) => {
		dispatch(createOrder(args));
	},
	refreshOrders: () => {
		dispatch(getOrders());
	},
	toast: (message) => {
		dispatch(toastMessage(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(OrderCreatePage);