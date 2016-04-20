import { ACTION_SELECT_PRODUCT } from '../actions';

export default function (selectedProducts = {}, {type, data}) {
	switch(type) {
		case ACTION_SELECT_PRODUCT:
			return {...selectedProducts, [data]: !selectedProducts[data]};
		default:
			return filter;
	}
}