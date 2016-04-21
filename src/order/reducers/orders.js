import { ACTION_LIST_ORDERS } from '../actions';
import { convertCompactOrder } from './convertor';

export default function (orders = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_LIST_ORDERS:
			if (!running&&!error&&data) {
				return data.map(item => convertCompactOrder(item))
					.sort((a, b) => !a['created_on'].localeCompare(b['created_on']));
			} else {
				return orders;
			}
		default:
			return orders;
	}
}