import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { listOrders } from './actions';
import List from './List';

const statusSelector = state => state.orderStatus.processing;

const ordersSelector = state => state.orders;

const activeSelector = (state, {isActive}) => isActive;

const mapStateToProps = createSelector(
	statusSelector,
	ordersSelector,
	activeSelector,
	(processing, orders, isActive) => {
		return {
			processing,
			orders: orders&&orders.filter(item => {
				if (isActive) {
					return item.paid&&item.status === 'Order Complete';
				} else {
					return !item.paid||item.status !== 'Order Complete';
				}
			})
		}
	}
);

const mapActionToProps = (dispatch) => ({
	listOrders: () => {
		dispatch(listOrders());
	}
});

export default connect(mapStateToProps, mapActionToProps)(List);