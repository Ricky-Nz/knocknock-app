import {
	ACTION_CHANGE_ACTIVE_ORDER_SORT, ACTION_CHANGE_HISTORY_ORDER_SORT,
	ACTION_CHANGE_ACTIVE_ORDER_FILETER, ACTION_CHANGE_HISTORY_ORDER_FILETER,
	ACTION_CHANGE_PRODUCT_FILETER
} from '../actions';

export default function (appState = {
	activeOrderSortType: 'pickup_date',
	historyOrderSortType: 'drop_off_date',
	activeOrderFilter: 'ALL',
	historyOrderFileter: 'ALL',
	productFilter: 'ALL'
}, action) {
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
		default:
			return appState;
	}
}