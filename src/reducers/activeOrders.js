import { ACTION_GET_ORDERS, ACTION_CREATE_ORDER } from '../actions';
import { convertOrder } from './utils';

export default function (orders = null, {type, running, error, data}) {
	switch(type) {
		// case ACTION_CREATE_ORDER:
		// 	if (!running && !error && data) {
		// 		return [ ...orders]
		// 	} else {
		// 		return orders;
		// 	}
		case ACTION_GET_ORDERS:
			if (!running && !error && data) {
				return data.filter(({order_status}) =>
					['Deleted', 'Laundry Complete'].indexOf(order_status.status) < 0).map(item => convertOrder(item));
			} else {
				return orders;
			}
		default:
			return orders;
	}
}