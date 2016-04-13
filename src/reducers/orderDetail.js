import { ACTION_GET_ORDER_DETAIL } from '../actions';
import { convertDetailOrder } from './dataConvertor';

export default function (order = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_ORDER_DETAIL:
			if (!running && !error && data) {
				return convertDetailOrder(data);
			} else {
				return order;
			}
		default:
			return order;
	}
}