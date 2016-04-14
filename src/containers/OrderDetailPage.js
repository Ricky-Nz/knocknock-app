import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getOrderDetail } from '../actions';
import OrderDetailPage from '../components/OrderDetailPage';

const orderSelector = state => state.orderDetail;

const loadingStateSelector = state => state.actionState.loadingOrder;

const mapStateToProps = createSelector(
	orderSelector,
	loadingStateSelector,
	(order, loading) => ({order, loading})
);

const mapActionToProps = (dispatch, {params}) => ({
	load: () => {
		dispatch(getOrderDetail(params.orderId));
	}
})

export default connect(mapStateToProps, mapActionToProps)(OrderDetailPage);