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
			{ id: 'pickup_date', name: 'Pickup date' },
			{ id: 'drop_off_date', name: 'Drop off date' },
			{ id: 'created_on', name: 'Create date' }
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