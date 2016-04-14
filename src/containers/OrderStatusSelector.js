import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { changeActiveOrderFilter, changeHistoryOrderFilter } from '../actions';
import { DropDownSelector } from '../widgets';

const orderSortSelector = (state, {historyOrder}) =>
	historyOrder?state.appState.historyOrderFileter:state.appState.activeOrderFilter;

const isHistorySelector = (state, {historyOrder}) => historyOrder;

const mapStateToProps = createSelector(
	orderSortSelector,
	isHistorySelector,
	(orderSortType, historyOrder) => ({
		selectedKey: orderSortType,
		displayPrefix: 'Filter:',
		items: historyOrder?[
			{ id: 'ALL', name: 'All' },
			{ id: 'Laundry Complete', name: 'Laundry Complete' },
			{ id: 'Deleted', name: 'Deleted' }
		]:[
			{ id: 'ALL', name: 'All' },
			{ id: 'Laundry in progress', name: 'Laundry in progress' },
			{ id: 'Pending Worker', name: 'Pending Worker' }
		],
		itemKeyName: 'id',
		itemPrimaryName: 'name'
	})
);

const mapActionToProps = (dispatch, {historyOrder}) => ({
	onSelectItem: (value) => {
		dispatch(historyOrder?changeHistoryOrderFilter(value):changeActiveOrderFilter(value));
	}
});

export default connect(mapStateToProps, mapActionToProps)(DropDownSelector);