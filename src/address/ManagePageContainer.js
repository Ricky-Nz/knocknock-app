import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { preDeleteAddress } from '../actions';
import ManagePage from './ManagePage';

const mapActionToProps = (dispatch) => ({
	preDeleteAddress: (address) => {
		dispatch(preDeleteAddress(address.id));
	}
});

export default connect(null, mapActionToProps)(ManagePage);