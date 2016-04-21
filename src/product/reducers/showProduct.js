import { ACTION_SHOW_PRODUCT } from '../actions';

export default function (product = null, {type, data}) {
	switch(type) {
		case ACTION_SHOW_PRODUCT:
			return Object.assign({}, data);
		default:
			return product;
	}
}
