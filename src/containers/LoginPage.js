import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { login, forgotPassword, toastMessage } from '../actions';
import LoginPage from '../components/LoginPage';

const logingInStateSelector = state => state.actionState.loggingin;

const logingInResultSelector = state => state.actionState.logginginSuccess;

const forgotingStateSelector = state => state.actionState.forgotingPassword;

const mapStateToProps = createSelector(
	logingInStateSelector,
	logingInResultSelector,
	forgotingStateSelector,
	(loggingin, loginSuccess, forgoting) => ({loggingin, loginSuccess, forgoting})
);

const mapActionToProps = (dispatch) => ({
	login: ({username, password}) => {
		dispatch(login({username, password}));
	},
	forgotPassword: (email) => {
		dispatch(forgotPassword(email));
	},
	toast: (message) => {
		dispatch(toastMessage(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(LoginPage);