import { ACTION_PRE_DELETE_ADDRESS } from '../actions';

export default function (address = null, {type, data}) {
	switch(type) {
		case ACTION_PRE_DELETE_ADDRESS:
			return Object.assign({}, data);
		default:
			return address;
	}
}