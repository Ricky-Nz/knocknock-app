import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { topUp } from '../actions';
import PaymentProcessingDialog from '../components/PaymentProcessingDialog';

const toppingUpStateSelector = state => state.appState.toppingUp;

const topUpInfoSelector = state => state.topUp;

const mapStateToProps = createSelector(
	toppingUpStateSelector,
	topUpInfoSelector,
	(toppingUp, topUpInfo) => ({toppingUp, topUpInfo})
);

const mapActionToProps = (dispatch) => ({
	topUp: (amount) => {
		dispatch(topUp(amount));
	}
});

export default connect(mapStateToProps, mapActionToProps)(PaymentProcessingDialog);