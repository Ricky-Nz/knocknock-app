import { ACTION_GET_PRODUCTS, ACTION_LOGOUT } from '../actions';
import { convertProduct } from './dataConvertor';

export default function (products = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_PRODUCTS:
			if (!running&&!error&&data) {
				return data.map(convertProduct);
			} else {
				return products;
			}
		case ACTION_LOGOUT:
			return null;
		default:
			return products;
	}
}
