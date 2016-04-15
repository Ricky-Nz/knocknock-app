import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getOrderDetail, payOrderByCredit, payOrderByPaypal } from '../actions';
import OrderDetailPage from '../components/OrderDetailPage';

const orderSelector = state => state.orderDetail;

const loadingStateSelector = state => state.actionState.loadingOrder;

const payingStateSelector = state => state.actionState.payingOrder;

const mapStateToProps = createSelector(
	orderSelector,
	loadingStateSelector,
	payingStateSelector,
	(order, loading, paying) => ({order, loading, paying})
);

const mapActionToProps = (dispatch) => ({
	load: (orderId) => {
		dispatch(getOrderDetail(orderId));
	},
	payOrderByCredit: (orderId) => {
		dispatch(payOrderByCredit(orderId));
	},
	payOrderByPaypal: (orderId, amount) => {
		dispatch(payOrderByPaypal(orderId, amount));
	}
})

export default connect(mapStateToProps, mapActionToProps)(OrderDetailPage);