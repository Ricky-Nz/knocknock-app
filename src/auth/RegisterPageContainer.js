import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { register, logIn } from '../actions';
import RegisterPage from '../components/RegisterPage';

const loggingStatusSelector = state => state.authStatus.logging;

const registingStatusSelector = state => state.authStatus.registing;

const resultSelector = state => state.authStatus.processSuccess;

const mapStateToProps = createSelector(
	loggingStatusSelector,
	registingStatusSelector,
	resultSelector,
	(logging, registing, processSuccess) => ({logging, registing, processSuccess})
);

const mapActionToProps = (dispatch) => ({
	register: (args) => {
		dispatch(register(args));
	},
	logIn: (args) => {
		dispatch(logIn(args));
	}
});

export default connect(mapStateToProps, mapActionToProps)(RegisterPage);