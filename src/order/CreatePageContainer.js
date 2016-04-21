import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createOrder, listOrders } from '../actions';
import { recordLastUsedAddress } from '../../address';
import { toast } from '../../app_common';
import OrderCreatePage from '../components/OrderCreatePage';

const penndingOrderSelector = state => state.penndingOrder;

const creatingStatusSelector = state => state.orderStatus.creating;

const actionResultSelector = state => state.orderStatus.processSuccess;

const mapStateToProps = createSelector(
	penndingOrderSelector,
	creatingStatusSelector,
	actionResultSelector,
	(penndingOrder, creating, processSuccess) => ({penndingOrder, creating, processSuccess})
);

const mapActionToProps = (dispatch) => ({
	createOrder: (order) => {
		dispatch(createOrder(order));
	},
	listOrders: () => {
		dispatch(listOrders());
	},
	toast: (message) => {
		dispatch(toast(message));
	},
	recordLastUsedAddress: (address) => {
		dispatch(recordLastUsedAddress(address));
	}
});

export default connect(mapStateToProps, mapActionToProps)(OrderCreatePage);