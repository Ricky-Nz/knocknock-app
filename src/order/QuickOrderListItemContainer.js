import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { toast } from '../app_common';
import QuickOrderListItem from './QuickOrderListItem';

const defaultAddressSelector = state => state.defaultAddress;

const defaultPickupTimeSelector = state => state.defaultPickupTime;

const mapStateToProps = createSelector(
	defaultAddressSelector,
	defaultPickupTimeSelector,
	(defaultAddress, defaultPickupTime) => ({defaultAddress, defaultPickupTime})
);

const mapActionToProps = (dispatch) => ({
	toast: (message) => {
		dispatch(toast(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(QuickOrderListItem);