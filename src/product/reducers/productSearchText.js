import { ACTION_SEARCH_PRODUCT } from '../actions';

export default function (productSearchText = null, {type, data}) {
	switch(type) {
		case ACTION_SEARCH_PRODUCT:
			return data;
		default:
			return appState;
	}
}