import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createAddress, updateAddress, getAddress } from './actions';
import CreateEditPage from './CreateEditPage';

const statusSelector = state => state.addressStatus.processing;

const resultSelector = state => state.addressStatus.processResult;

const addressSelector = state => params.addressDetail;

const mapStateToProps = createSelector(
	statusSelector,
	resultSelector,
	addressSelector,
	(processing, processResult, address) =>
		({processing, processResult, address})
);

const mapActionToProps = (dispatch) => ({
	createAddress: (args) => {
		dispatch(createAddress(args));
	},
	updateAddress: (args) => {
		dispatch(updateAddress(args));
	},
	getAddress: (args) => {
		dispatch(getAddress(args));
	}
});

export default connect(mapStateToProps, mapActionToProps)(CreateEditPage);