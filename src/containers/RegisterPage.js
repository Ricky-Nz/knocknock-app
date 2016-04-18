import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { register, login, toastMessage } from '../actions';
import RegisterPage from '../components/RegisterPage';

const registeringStateSelector = state => state.actionState.registering;

const registeringResultSelector = state => state.actionState.registeringSuccess;

const logginginStateSelector = state => state.actionState.loggingin;

const logginginResultSelector = state => state.actionState.logginginSuccess;

const mapStateToProps = createSelector(
	registeringStateSelector,
	registeringResultSelector,
	logginginStateSelector,
	logginginResultSelector,
	(registering, registerSuccess, loggingin, logginginSuccess) =>
		({registering, registerSuccess, loggingin, logginginSuccess})
);

const mapActionToProps = (dispatch) => ({
	register: (args) => {
		dispatch(register(args));
	},
	login: ({username, password}) => {
		dispatch(login({username, password}));
	},
	toast: (message) => {
		dispatch(toastMessage(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(RegisterPage);