import { ACTION_RECORD_LAST_USED_ADDRESS } from '../actions';

export default function (address = null, {type, data}) {
	switch(type) {
		case ACTION_RECORD_LAST_USED_ADDRESS:
			return data;
		default:
			return address;
	}
}