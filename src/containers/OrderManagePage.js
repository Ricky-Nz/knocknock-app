import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getOrders } from '../actions';
import OrderManagePage from '../components/OrderManagePage';

const loadingStateSelector = state => state.actionState.loadingOrders;

const orderStateFilterSelector = state => state.appState.activeOrderFilter;

const orderSortSelector = state => state.appState.activeOrderSortType;

const mapStateToProps = createSelector(
	loadingStateSelector,
	orderStateFilterSelector,
	orderSortSelector,
	(loading, statusFilter, sort) => {
		const sortCconfig = sort.split('$');
		return {
			loading,
			statusFilter,
			sortBy: sortCconfig[0],
			sortOrder: sortCconfig[1]==='new2old'
		}
	}
);

const mapActionToProps = (dispatch) => ({
	loadOrders: () => {
		dispatch(getOrders(true));
	}
});

export default connect(mapStateToProps, mapActionToProps)(OrderManagePage);