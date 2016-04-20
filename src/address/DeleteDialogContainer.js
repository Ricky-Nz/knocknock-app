import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { deleteAddress } from '../actions';
import DeleteDialog from './DeleteDialog';

const statusSelector = state => state.addressStatus.processing;

const resultSelector = state => state.addressStatus.processResult;

const penndingAddressSelector = state => state.penndingDeleteAddress;

const mapStateToProps = createSelector(
	statusSelector，
	resultSelector,
	penndingAddressSelector,
	(processing, processResult, penndingAddress) => ({processing, processResult, penndingAddress})
);

const mapActionToProps = (dispatch) => ({
	deleteAddress: (id) => {
		dispatch(deleteAddress(id));
	}
});

export default connect(mapStateToProps, mapActionToProps)(DeleteDialog);