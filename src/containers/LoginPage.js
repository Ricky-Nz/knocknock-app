import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { login } from '../actions';
import LoginPage from '../components/LoginPage';

const tokenSelector = state => state.session.token;

const logingInStateSelector = state => state.actionState.loggingin;

const mapStateToProps = createSelector(
	tokenSelector,
	logingInStateSelector,
	(token, loggingin) => ({token, loggingin})
);

const mapActionToProps = (dispatch) => ({
	onLogin: ({username, password}) => {
		dispatch(login({username, password}));
	}
});

export default connect(mapStateToProps, mapActionToProps)(LoginPage);