import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { changeActiveOrderSort, changeHistoryOrderSort } from '../actions';
import { DropDownSelector } from '../widgets';

const orderSortSelector = (state, {historyOrder}) =>
	historyOrder?state.appState.historyOrderSortType:state.appState.activeOrderSortType;

const mapStateToProps = createSelector(
	orderSortSelector,
	(orderSortType) => ({
		selectedKey: orderSortType,
		displayPrefix: 'Sort by:',
		items: [
			{ id: 'created_on$new2old', name: 'Create date, from new to old' },
			{ id: 'created_on$old2new', name: 'Create date, from old to new' },
			{ id: 'pickup_date$new2old', name: 'Pickup date, from new to old' },
			{ id: 'pickup_date$old2new', name: 'Pickup date, from old to new' }
		],
		itemKeyName: 'id',
		itemPrimaryName: 'name'
	})
);

const mapActionToProps = (dispatch, {historyOrder}) => ({
	onSelectItem: (value) => {
		dispatch(historyOrder?changeHistoryOrderSort(value):changeActiveOrderSort(value));
	}
});

export default connect(mapStateToProps, mapActionToProps)(DropDownSelector);