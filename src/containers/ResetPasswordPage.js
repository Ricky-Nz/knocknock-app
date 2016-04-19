import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { resetPassword } from '../actions';
import ResetPasswordPage from '../components/ResetPasswordPage';

const resetStateSelector = state => state.actionState.updatingPassword;

const resetResultSelector = state => state.actionState.updatingPasswordSuccess;

const mapStateToProps = createSelector(
	resetStateSelector,
	resetResultSelector,
	(resetting, resetResult) => ({resetting, resetResult})
);

const mapActionToProps = (dispatch) => ({
	resetPassword: (newPassword) => {
		dispatch(resetPassword(newPassword));
	}
});

export default connect(mapStateToProps, mapActionToProps)(ResetPasswordPage);