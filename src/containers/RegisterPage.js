import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { register, toastMessage } from '../actions';
import RegisterPage from '../components/RegisterPage';

const registeringStateSelector = state => state.actionState.registering;

const mapStateToProps = createSelector(
	registeringStateSelector,
	(registering) => ({registering})
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