import { ACTION_SELECT_PRODUCT } from '../actions';

export default function (selectedProducts = {}, {type, data}) {
	switch(type) {
		case ACTION_SELECT_PRODUCT:
			if (selectedProducts[data]) {
				let copyData = Object.assign({}, selectedProducts);
				delete copyData[data];
				return copyData;
			} else {
				return {...selectedProducts, [data]: true};
			}
		default:
			return filter;
	}
}