import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getOrders } from '../actions';
import OrderList from '../components/OrderList';

const loadingStateSelector = (state) => state.appState.loadingOrders;

const orderSortSelector = (state, {historyOrder}) =>
	historyOrder?state.appState.historyOrderSortType:state.appState.activeOrderSortType;

const orderFilterSelector = (state, {historyOrder}) =>
	historyOrder?state.appState.historyOrderFileter:state.appState.activeOrderFilter;

const dataSelector = (state, {historyOrder}) => historyOrder?state.historyOrders:state.activeOrders;

const isHistorySelector = (state, {historyOrder}) => historyOrder;

function orderSort(a, b, orderSortType, historyOrder) {
  const x = a[orderSortType];
  const y = b[orderSortType];
  if (historyOrder) {
  	return ((x < y) ? 1 : ((x > y) ? -1 : 0));
  } else {
  	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  }
}

const mapStateToProps = createSelector(
	loadingStateSelector,
	orderSortSelector,
	orderFilterSelector,
	dataSelector,
	isHistorySelector,
	(loading, orderSortType, filter, orders, historyOrder) => ({
		loading,
		orderSortType,
		orders: orders&&
			orders.filter(order => filter==='ALL'?true:(filter===order.status))
				.sort((a, b) => orderSort(a, b, orderSortType, historyOrder))
	})
);

const mapActionToProps = (dispatch) => ({
	loadOrders: () => {
		dispatch(getOrders());
	}
});

export default connect(mapStateToProps, mapActionToProps)(OrderList);