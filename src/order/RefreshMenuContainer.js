import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { listOrders, getOrder } from '../actions';
import RefreshMenu from './RefreshMenu';

const statusSelector = state => state.orderStatus.processing;

const mapStateToProps = createSelector(
	statusSelector,
	(processing) => ({processing})
);

const mapActionToProps = (dispatch, {orderId}) => ({
	onClick: () => {
		dispatch(orderId?getOrder(orderId, true):listAddresses(true));
	}
});

export default connect(mapStateToProps, mapActionToProps)(RefreshMenu);