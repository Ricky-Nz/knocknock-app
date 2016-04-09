import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MessageToast from '../components/MessageToast';

const errorSelector = state => state.appState.error;

const mapStateToProps = createSelector(
	errorSelector,
	(error) => ({error})
);

export default connect(mapStateToProps)(MessageToast);