import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import PaypalProcessDialog from './PaypalProcessDialog';

const statusSelector = state => state.paymentStatus.processing;

const paypalSelector = state => state.paypal;

const mapStateToProps = createSelector(
	statusSelector,
	paypalSelector,
	(processing, paypal) => ({processing, paypal})
);

export default connect(mapStateToProps)(PaypalProcessDialog);