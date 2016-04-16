import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getOrderDetail, payOrderByCredit, payOrderByPaypal } from '../actions';
import OrderStatusActionBanner from '../components/OrderStatusActionBanner';

const creditPayStatusSelector = state => state.actionState.creditPaying;

const creditPayResultSelector = state => state.actionState.creditPayingSuccess;

const mapStateTpProps = createSelector(
	creditPayStatusSelector,
	creditPayResultSelector,
	(creditPaying, creditPaySuccess) => ({creditPaying, creditPaySuccess})
);

const mapActionToProps = (dispatch) => ({
	payOrderByCredit: (orderId) => {
		dispatch(payOrderByCredit(orderId));
	},
	payOrderByPaypal: (orderId, amount) => {
		dispatch(payOrderByPaypal(orderId, amount));
	},
	refreshOrder: (orderId) => {
		dispatch(getOrderDetail(orderId));
	}
})

export default connect(mapStateTpProps, mapActionToProps)(OrderStatusActionBanner);