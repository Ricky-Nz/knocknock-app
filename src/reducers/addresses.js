import { ACTION_GET_USER_ADDRESSES, ACTION_CREATE_ADDRESS,
	ACTION_EDIT_ADDRESS, ACTION_DELETE_ADDRESS, ACTION_LOGOUT } from '../actions';
import { convertAddress } from './dataConvertor';

export default function (addresses = null, {type, running, error, data, arg}) {
	switch(type) {
		case ACTION_GET_USER_ADDRESSES:
			if (!running && !error && data) {
				return data.map(item => convertAddress(item));
			} else {
				return addresses;
			}
		case ACTION_CREATE_ADDRESS:
			if (!running && !error && data && data.status && data.result) {
				return [convertAddress(data.result), ...addresses];
			} else {
				return addresses;
			}
		case ACTION_EDIT_ADDRESS:
			if (!running && !error && data && data.status && data.result) {
				const index = addresses.findIndex(address => address.id === data.result.id);
				if (index >= 0) {
					return [...addresses.slice(0, index), convertAddress(data.result), ...addresses.slice(index + 1)];
				} else {
					return addresses;
				}
			} else {
				return addresses;
			}
		case ACTION_DELETE_ADDRESS:
			if (!running && !error && data) {
				const index = addresses.findIndex(address => address.id === arg);
				if (index >= 0) {
					return [...addresses.slice(0, index), ...addresses.slice(index + 1)];
				} else {
					return addresses;
				}
			} else {
				return addresses;
			}
		case ACTION_LOGOUT:
			return null;
		default:
			return addresses;
	}
}