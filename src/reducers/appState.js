import {
	ACTION_CHANGE_ACTIVE_ORDER_SORT, ACTION_CHANGE_HISTORY_ORDER_SORT,
	ACTION_CHANGE_ACTIVE_ORDER_FILETER, ACTION_CHANGE_HISTORY_ORDER_FILETER,
	ACTION_CHANGE_PRODUCT_FILETER, ACTION_LOGOUT
} from '../actions';

const defaultConfig = {
	activeOrderSortType: 'created_on',
	historyOrderSortType: 'created_on',
	activeOrderFilter: 'ALL',
	historyOrderFileter: 'ALL',
	productFilter: 'ALL'
};

export default function (appState = defaultConfig, action) {
	switch(action.type) {
		case ACTION_CHANGE_ACTIVE_ORDER_SORT:
			return {...appState, activeOrderSortType: action.data};
		case ACTION_CHANGE_HISTORY_ORDER_SORT:
			return {...appState, historyOrderSortType: action.data};
		case ACTION_CHANGE_ACTIVE_ORDER_FILETER:
			return {...appState, activeOrderFilter: action.data};
		case ACTION_CHANGE_HISTORY_ORDER_FILETER:
			return {...appState, historyOrderFileter: action.data};
		case ACTION_CHANGE_PRODUCT_FILETER:
			return {...appState, productFilter: action.data};
		case ACTION_LOGOUT:
			return defaultConfig;
		default:
			return appState;
	}
}