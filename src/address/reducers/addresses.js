import { ACTION_LIST_ADDRESSES, ACTION_CREATE_ADDRESS,
	ACTION_EDIT_ADDRESS, ACTION_DELETE_ADDRESS } from '../actions';
import { convertCompact } from './convertor';

export default function (addresses = null, {type, running, error, data, arg}) {
	switch(type) {
		case ACTION_LIST_ADDRESSES:
			if (!running && !error && data) {
				return data.map(item => convertCompact(item));
			} else {
				return addresses;
			}
		case ACTION_CREATE_ADDRESS:
			if (!running && !error && data && data.status && data.result) {
				return [convertCompact(data.result), ...addresses];
			} else {
				return addresses;
			}
		case ACTION_EDIT_ADDRESS:
			if (!running && !error && data && data.status && data.result) {
				const index = addresses.findIndex(address => address.id === data.result.id);
				if (index >= 0) {
					return [...addresses.slice(0, index), convertCompact(data.result), ...addresses.slice(index + 1)];
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
		default:
			return addresses;
	}
}