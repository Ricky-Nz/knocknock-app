import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getOrder } from '../actions';
import OrderDetailPage from '../components/OrderDetailPage';

const orderSelector = state => state.orderDetail;

const statusSelector = state => state.orderStatus.processing;

const mapStateToProps = createSelector(
	orderSelector,
	statusSelector,
	(order, processing) => ({order, processing})
);

const mapActionToProps = (dispatch) => ({
	getOrder: (orderId) => {
		dispatch(getOrder(orderId));
	}
})

export default connect(mapStateToProps, mapActionToProps)(OrderDetailPage);