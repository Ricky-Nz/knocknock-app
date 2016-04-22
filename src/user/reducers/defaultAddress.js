import { ACTION_SET_DEFAULT_ADDRESS } from '../actions';
import { saveDefaultAddress, getDefaultAddress } from '../../localStorage';

export default function (defaultAddress = getDefaultAddress(), {type, data}) {
	switch(type) {
		case ACTION_SET_DEFAULT_ADDRESS:
			saveDefaultAddress(data);
			return Object.assign({}, data);
		default:
			return defaultAddress;
	}
}