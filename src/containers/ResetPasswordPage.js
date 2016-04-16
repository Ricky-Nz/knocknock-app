import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { resetPassword } from '../actions';
import ResetPasswordPage from '../components/ResetPasswordPage';

const resetStateSelector = state => state.actionState.resettingPassword;

const mapStateToProps = createSelector(
	resetStateSelector,
	(resetting) => ({resetting})
);

const mapActionToProps = (dispatch) => ({
	resetPassword: (newPassword) => {
		dispatch(resetPassword(newPassword));
	}
});

export default connect(mapStateToProps, mapActionToProps)(ResetPasswordPage);