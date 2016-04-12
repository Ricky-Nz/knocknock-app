import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getOrders } from '../actions';
import OrderList from '../components/OrderList';

const loadingStateSelector = (state) => state.appState.loadingOrders;

const orderSortSelector = (state) => state.appState.orderSortType;

const dataSelector = (state, {historyOrder}) => historyOrder?state.historyOrders:state.activeOrders;

const mapStateToProps = createSelector(
	loadingStateSelector,
	orderSortSelector,
	dataSelector,
	(loading, orderSortType, orders) => ({
		loading,
		orderSortType,
		orders: orders&&orders.sort((a, b) => {
      const x = a[orderSortType];
      const y = b[orderSortType];
      return ((x < y) ? 1 : ((x > y) ? -1 : 0));
		})
	})
);

const mapActionToProps = (dispatch) => ({
	loadOrders: () => {
		dispatch(getOrders());
	}
});

export default connect(mapStateToProps, mapActionToProps)(OrderList);