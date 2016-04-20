import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { listAddresses, preDeleteAddress } from '../actions';
import List from './List';

const statusSelector = state => state.addressStatus.processing;

const addressesSelector = state => state.addresses;

const mapStateToProps = createSelector(
	statusSelector,
	addressesSelector,
	(processing, addresses) => ({processing, addresses})
);

const mapActionToProps = (dispatch) => ({
	listAddresses: () => {
		dispatch(listAddresses());
	},
	preDeleteAddress: (address) => {
		dispatch(preDeleteAddress(address));
	}
});

export default connect(mapStateToProps, mapActionToProps)(List);