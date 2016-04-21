import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { MessageToast } from '../app_widgets';

const toastSelector = state => state.toast;

const mapStateToProps = createSelector(
	toastSelector,
	(toast) => ({toast})
);

export default connect(mapStateToProps)(MessageToast);