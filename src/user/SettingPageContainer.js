import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setDefaultAddress, setDefaultPickupTime, setDefaultNote } from '../actions';
import SettingPage from '../components/SettingPage';

const settingSelector = state => state.settings;

const mapStateToProps = createSelector(
	settingSelector,
	(settings) => ({...settings})
);

const mapActionToProps = (dispatch) => ({
	setDefaultAddress: (address) => {
		dispatch(setDefaultAddress(address));
	},
	setDefaultPickupTime: (pickupTime) => {
		dispatch(setDefaultPickupTime(pickupTime));
	},
	setDefaultNote: (note) => {
		dispatch(setDefaultNote(note));
	}
});

export default connect(mapStateToProps, mapActionToProps)(SettingPage);