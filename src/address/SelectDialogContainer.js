import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import SelectDialog from './SelectDialog';

const statusSelector = state => state.addressStatus.processing;

const addressSelector = state => state.addresses;

const mapStateToProps = createSelector(
	statusSelector,
	addressSelector,
	(processing, addresses) => ({processing, addresses})
);

export default connect(mapStateToProps)(SelectDialog);