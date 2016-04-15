import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { register, toastMessage } from '../actions';
import RegisterPage from '../components/RegisterPage';

const registeringStateSelector = state => state.actionState.registering;

const registeringResultSelector = state => state.actionState.registeringSuccess;

const mapStateToProps = createSelector(
	registeringStateSelector,
	registeringResultSelector,
	(registering, registerSuccess) => ({registering, registerSuccess})
);

const mapActionToProps = (dispatch) => ({
	onRegister: (args) => {
		dispatch(register(args));
	},
	toast: (message) => {
		dispatch(toastMessage(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(RegisterPage);