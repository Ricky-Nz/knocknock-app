import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createOrder, toastMessage } from '../actions';
import OrderCreatePage from '../components/OrderCreatePage';

const loadingStateSelector = state => state.appState.creatingOrder;

const mapStateToProps = createSelector(
	loadingStateSelector,
	(creating) => ({creating})
);

const mapActionToProps = (dispatch, props) => ({
	createOrder: (args) => {
		dispatch(createOrder(args));
	},
	toast: (message) => {
		dispatch(toastMessage(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(OrderCreatePage);