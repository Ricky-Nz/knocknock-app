import { ACTION_LIST_PRODUCTS, ACTION_LOGOUT } from '../actions';
import { convertProduct } from './convertor';

export default function (products = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_LIST_PRODUCTS:
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
