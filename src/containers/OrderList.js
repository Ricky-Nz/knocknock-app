import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getOrders } from '../actions';
import OrderList from '../components/OrderList';

const loadingStateSelector = (state) => state.actionState.loadingOrders;

const statusFileterSelector = (state, {statusFilter}) => statusFilter; 

const sortBySelector = (state, {sortBy}) => sortBy;

const sortOrderSelector = (state, {sortOrder}) => sortOrder;

const dataSelector = (state, {historyOrder}) => historyOrder?state.historyOrders:state.activeOrders;

const mapStateToProps = createSelector(
	loadingStateSelector,
	statusFileterSelector,
	sortBySelector,
	sortOrderSelector,
	dataSelector,
	(loading, statusFilter, sortBy, sortOrder, orders) => ({
		loading,
		sortBy,
		orders: orders&&
			orders.filter(order => statusFilter==='ALL'?true:(statusFilter===order.status))
				.sort((a, b) => {
				  const x = a[sortBy];
				  const y = b[sortBy];
				  if (sortOrder) {
				  	return ((x < y) ? 1 : ((x > y) ? -1 : 0));
				  } else {
				  	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
				  }
				})
	})
);

const mapActionToProps = (dispatch) => ({
	loadOrders: () => {
		dispatch(getOrders());
	}
});

export default connect(mapStateToProps, mapActionToProps)(OrderList);