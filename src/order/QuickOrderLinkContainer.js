import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { toastMessage } from '../actions';
import QuickOrderButton from '../components/QuickOrderButton';

const defaultAddressSelector = state => state.settings.address;

const defaultPickupTimeSelector = state => state.settings.pickupTime;

const mapStateToProps = createSelector(
	defaultAddressSelector,
	defaultPickupTimeSelector,
	(address, pickupTime) => ({address, pickupTime})
);

const mapActionToProps = (dispatch) => ({
	toast: (message) => {
		dispatch(toastMessage(message));
	}
});

export default connect(mapStateToProps, mapActionToProps)(QuickOrderButton);