import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getOrders } from '../actions';
import OrderManagePage from '../components/OrderManagePage';

const loadingStateSelector = state => state.appState.loadingOrders;

const mapStateToProps = createSelector(
	loadingStateSelector,
	(loading) => ({loading})
);

const mapActionToProps = (dispatch) => ({
	loadOrders: () => {
		dispatch(getOrders());
	}
});

export default connect(mapStateToProps, mapActionToProps)(OrderManagePage);