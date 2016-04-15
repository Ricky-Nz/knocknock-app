import { ACTION_GET_ORDERS, ACTION_LOGOUT } from '../actions';
import { convertCompactOrder } from './dataConvertor';

export default function (orders = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_ORDERS:
			if (!running && !error && data) {
				return data.filter(({order_status}) =>
					['Deleted', 'Laundry Complete'].indexOf(order_status.status) >= 0)
						.map(item => convertCompactOrder(item));
			} else {
				return orders;
			}
		case ACTION_LOGOUT:
			return null;
		default:
			return orders;
	}
}