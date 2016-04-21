import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { resetPassword } from './actions';
import ResetPasswordPage from './ResetPasswordPage';

const statusSelector = state => state.userStatus.processing;

const resultSelector = state => state.userStatus.processSuccess;

const mapStateToProps = createSelector(
	statusSelector,
	resultSelector,
	(processing, processSuccess) => ({processing, processSuccess})
);

const mapActionToProps = (dispatch) => ({
	resetPassword: (password) => {
		dispatch(resetPassword(password));
	}
});

export default connect(mapStateToProps, mapActionToProps)(ResetPasswordPage);