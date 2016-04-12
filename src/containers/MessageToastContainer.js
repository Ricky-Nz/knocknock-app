import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MessageToast from '../components/MessageToast';

const toastSelector = state => state.appState.toast;

const mapStateToProps = createSelector(
	toastSelector,
	(toast) => ({toast})
);

export default connect(mapStateToProps)(MessageToast);