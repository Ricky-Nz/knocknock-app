import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { payByCredit, payByPaypal } from './actions';
import OrderPaymentBanner from './OrderPaymentBanner';

const statusSelector = state => state.paymentStatus.processing;

const orderSelector = state => state.orderDetail;

const mapStateTpProps = createSelector(
	statusSelector,
	orderSelector,
	(processing, order) => ({processing, order})
);

const mapActionToProps = (dispatch) => ({
	payByCredit: (orderId) => {
		dispatch(payByCredit(orderId));
	},
	payByPaypal: (orderId, amount) => {
		dispatch(payByPaypal(orderId, amount));
	}
})

export default connect(mapStateTpProps, mapActionToProps)(OrderPaymentBanner);