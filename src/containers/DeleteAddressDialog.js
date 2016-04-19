import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { deleteAddress } from '../actions';
import DeleteAddressDialog from '../components/DeleteAddressDialog';

const deletingSelector = state => state.actionState.deletingAddress;

const mapStateToProps = createSelector(
	deletingSelector,
	(deleting) => ({deleting})
);

const mapActionToProps = (dispatch) => ({
	deleteAddress: (id) => {
		dispatch(deleteAddress(id));
	}
});

export default connect(mapStateToProps, mapActionToProps)(DeleteAddressDialog);