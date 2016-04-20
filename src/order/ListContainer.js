import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getOrders } from '../actions';
import OrderList from '../components/OrderList';

const loadingStateSelector = (state) => state.actionState.loadingOrders;

const dataSelector = (state, {isActive}) => isActive?state.activeOrders:state.historyOrders;

const mapStateToProps = createSelector(
	loadingStateSelector,
	dataSelector,
	(loading, orders) => ({loading, orders})
);

const mapActionToProps = (dispatch) => ({
	loadOrders: () => {
		dispatch(getOrders());
	}
});

export default connect(mapStateToProps, mapActionToProps)(OrderList);