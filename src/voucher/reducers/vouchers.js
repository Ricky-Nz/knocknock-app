import { ACTION_LIST_VOUCHERS } from '../actions';
import { convertVouchers } from './dataConvertor';

export default function (vochers = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_LIST_VOUCHERS:
			if (!running && !error && data) {
				return data
					.filter(item => !item.used)
					.map(item => convertVouchers(item))
					.sort((a, b) => a['expire_on'].localeCompare(b['expire_on']));
			} else {
				return vochers;
			}
		default:
			return vochers;
	}
}