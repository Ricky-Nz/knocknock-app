import { ACTION_GET_ORDER_DETAIL, ACTION_LOGOUT } from '../actions';
import { convertDetailOrder } from './convertor';

export default function (order = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_ORDER_DETAIL:
			if (!running && !error && data) {
				return convertDetailOrder(data);
			} else {
				return null;
			}
		case ACTION_LOGOUT:
			return null;
		default:
			return order;
	}
}