import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { MessageToast } from '../widgets';

const toastSelector = state => state.toast;

const mapStateToProps = createSelector(
	toastSelector,
	(toast) => ({toast})
);

export default connect(mapStateToProps)(MessageToast);