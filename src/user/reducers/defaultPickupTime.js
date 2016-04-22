import { ACTION_SET_DEFAULT_PICKUP_TIME } from '../actions';
import { saveDefaultPickupTime, getDefaultPickupTime } from '../../localStorage';

export default function (defaultPickupTime = getDefaultPickupTime(), {type, data}) {
	switch(type) {
		case ACTION_SET_DEFAULT_PICKUP_TIME:
			saveDefaultPickupTime(data);
			return Object.assign({}, data);
		default:
			return defaultPickupTime;
	}
}