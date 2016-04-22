import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { logIn, preForgotPassword } from './actions';
import LoginPage from './LoginPage';

const statusSelector = state => state.authStatus.logging;

const resultSelector = state => state.authStatus.processResult;

const mapStateToProps = createSelector(
	statusSelector,
	resultSelector,
	(processing, processResult) => ({processing, processResult})
);

const mapActionToProps = (dispatch) => ({
	logIn: (args) => {
		dispatch(logIn(args));
	},
	preForgotPassword: (email) => {
		dispatch(preForgotPassword(email));
	}
});

export default connect(mapStateToProps, mapActionToProps)(LoginPage);