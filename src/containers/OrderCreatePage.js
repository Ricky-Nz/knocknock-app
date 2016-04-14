import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createOrder, getOrders, toastMessage } from '../actions';
import OrderCreatePage from '../components/OrderCreatePage';

const creatingStateSelector = state => state.actionState.creatingOrder;

const resultSelector = state => state.actionState.creatingOrderSuccess;

const mapStateToProps = createSelector(
	creatingStateSelector,
	resultSelector,
	(creating, success) => ({creating, success})
);

const mapActionToProps = (dispatch, props) => ({
	createOrder: (args) => {
		dispatch(createOrder(args));
	},
	refreshOrders: () => {
		dispatch(getOrders());
	},
	toast: (message) => {
		dispatch(toastMessage(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(OrderCreatePage);