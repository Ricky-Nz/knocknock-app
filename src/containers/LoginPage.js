import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { login } from '../actions';
import LoginPage from '../components/LoginPage';

const logingInStateSelector = state => state.actionState.loggingin;

const logingInResultSelector = state => state.actionState.logginginSuccess;

const mapStateToProps = createSelector(
	logingInStateSelector,
	logingInResultSelector,
	(loggingin, loginSuccess) => ({loggingin, loginSuccess})
);

const mapActionToProps = (dispatch) => ({
	onLogin: ({username, password}) => {
		dispatch(login({username, password}));
	}
});

export default connect(mapStateToProps, mapActionToProps)(LoginPage);