import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { forgotPassword } from '../actions';
import ForgotPasswordDialog from './ForgotPasswordDialog';

const statusSelector = state => state.authStatus.processing;

const penndingAddressSelector = state => state.penndingForgotEmail;

const mapStateToProps = createSelector(
	statusSelector,
	penndingAddressSelector,
	(processing, penndingForgotEmail) => ({processing, penndingForgotEmail})
);

const mapActionToProps = (dispatch) => ({
	forgotPassword: (email) => {
		dispatch(forgotPassword(email));
	}
});

export default connect(mapStateToProps, mapActionToProps)(ForgotPasswordDialog);