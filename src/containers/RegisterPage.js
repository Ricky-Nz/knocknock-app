import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { register, toastMessage } from '../actions';
import RegisterPage from '../components/RegisterPage';

const errorMessageSelector = state => state.appState.error;

const registeringStateSelector = state => state.appState.registering;

const mapStateToProps = createSelector(
	errorMessageSelector,
	registeringStateSelector,
	(error, registering) => ({error, registering})
);

const mapActionToProps = (dispatch) => ({
	onRegister: ({username, password, contactNo}) => {
		dispatch(register({username, password, contactNo}));
	},
	toast: (message) => {
		dispatch(toastMessage(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(RegisterPage);