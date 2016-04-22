import { ACTION_SEARCH_PRODUCT } from '../actions';

export default function (searchText = null, {type, data}) {
	switch(type) {
		case ACTION_SEARCH_PRODUCT:
			return data;
		default:
			return searchText;
	}
}