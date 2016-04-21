import { ACTION_NEW_ORDER, ACTION_STEP_CHANGE_NOTE, ACTION_STEP_SELECT_ADRESS,
	ACTION_STEP_SELECT_PICKUP_DATE, ACTION_STEP_SELECT_PICKUP_TIME } from '../actions';
import { getLastUsedAddress, getDefaultAddress, getDefaultPickupTime, getDefaultNote } from '../../localStorage';

export default function (order = null, {type, data}) {
	switch(type) {
		case ACTION_NEW_ORDER:
			return {
				address: getDefaultAddress()||getLastUsedAddress(),
				pickupTime: getDefaultPickupTime(),
				note: getDefaultNote()
			};
		case ACTION_STEP_CHANGE_NOTE:
			return {...order, {note: data}};
		case ACTION_STEP_SELECT_ADRESS:
			return {...order, {address: data}};
		case ACTION_STEP_SELECT_PICKUP_DATE:
			return {...order, {pickupDate: data}};
		case ACTION_STEP_SELECT_PICKUP_TIME:
			return {...order, {pickupTime: data}};
		default:
			return order;
	}
}