import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { recordDefaultAddress, recordDefaultPickupTime, recordDefaultNote } from './actions';
import SettingPage from './SettingPage';

const addressSelector = state => state.defaultAddress;

const pickupTimeSelector = state => state.defaultPickupTime;

const noteSelector = state => state.defaultNote;

const mapStateToProps = createSelector(
	addressSelector,
	pickupTimeSelector,
	noteSelector,
	(defaultAddress, defaultPickupTime, defaultNote) =>
		({defaultAddress, defaultPickupTime, defaultNote})
);

const mapActionToProps = (dispatch) => ({
	recordDefaultAddress: (address) => {
		dispatch(recordDefaultAddress(address));
	},
	recordDefaultPickupTime: (pickupTime) => {
		dispatch(recordDefaultPickupTime(pickupTime));
	},
	recordDefaultNote: (note) => {
		dispatch(recordDefaultNote(note));
	}
});

export default connect(mapStateToProps, mapActionToProps)(SettingPage);