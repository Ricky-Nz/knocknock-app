import { ACTION_GET_VOUCHERS, ACTION_LOGOUT } from '../actions';
import { convertVouchers } from './dataConvertor';

export default function (vochers = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_VOUCHERS:
			if (!running && !error && data) {
				return data
					.filter(item => !item.used)
					.map(item => convertVouchers(item))
					.sort((a, b) => a['expire_on'].localeCompare(b['expire_on']));
			} else {
				return vochers;
			}
		case ACTION_LOGOUT:
			return null;
		default:
			return vochers;
	}
}