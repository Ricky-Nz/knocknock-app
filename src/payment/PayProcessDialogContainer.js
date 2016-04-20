import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PaymentProcessingDialog from '../components/PaymentProcessingDialog';

const statusSelector = state => state.actionState.paying;

const paymentResultSelector = state => state.payment;

const mapStateToProps = createSelector(
	statusSelector,
	paymentResultSelector,
	(paying, payment) => ({paying, payment})
);

export default connect(mapStateToProps)(PaymentProcessingDialog);