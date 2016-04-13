import { ACTION_GET_PRODUCTS } from '../actions';
import { convertProduct } from './dataConvertor';

export default function (products = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_PRODUCTS:
			if (!running && !error && data) {
				return data.map(convertProduct);
			} else {
				return products;
			}
		default:
			return products;
	}
}
