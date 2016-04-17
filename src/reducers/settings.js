import { ACTION_SET_DEFAULT_ADDRESS, ACTION_SET_DEFAULT_PICKUP_TIME,
	ACTION_SET_DEFAULT_NOTE, ACTION_LOGOUT } from '../actions';
import { saveDefaultAddress, getDefaultAddress, saveDefaultPickupTime,
	getDefaultPickupTime, saveDefaultNote, getDefaultNote, clearDefaultSetting } from './localStorage';

export default function (settings = {
	address: getDefaultAddress(),
	pickupTime: getDefaultPickupTime(),
	note: getDefaultNote()
}, {type, data}) {
	switch(type) {
		case ACTION_SET_DEFAULT_ADDRESS:
			saveDefaultAddress(data);
			return {...settings, address: data};
		case ACTION_SET_DEFAULT_PICKUP_TIME:
			saveDefaultPickupTime(data);
			return {...settings, pickupTime: data};
		case ACTION_SET_DEFAULT_NOTE:
			saveDefaultNote(data);
			return {...settings, note: data};
		case ACTION_LOGOUT:
			clearDefaultSetting();
			return {};
		default:
			return settings;
	}
}