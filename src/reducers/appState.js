import {
	ACTION_CHANGE_PRODUCT_FILETER,
	ACTION_SEARCH_PRODUCT,
	ACTION_LOGOUT
} from '../actions';

export default function (appState = {productFilter: 'ALL'}, {type, data}) {
	switch(type) {
		case ACTION_CHANGE_PRODUCT_FILETER:
			return {...appState, productFilter: data};
		case ACTION_SEARCH_PRODUCT:
			return {...appState, searchProduct: data};
		case ACTION_LOGOUT:
			return defaultConfig;
		default:
			return appState;
	}
}