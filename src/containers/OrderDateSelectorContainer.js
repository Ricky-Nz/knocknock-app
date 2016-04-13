import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { changeActiveOrderSort, changeHistoryOrderSort } from '../actions';
import { DropDownSelector } from '../widgets';

const orderSortSelector = (state, {historyOrder}) =>
	historyOrder?state.appState.historyOrderSortType:state.appState.activeOrderSortType;

const dataSelector = state => state.orders;

const mapStateToProps = createSelector(
	orderSortSelector,
	dataSelector,
	(orderSortType, orders) => ({
		selectedKey: orderSortType,
		displayPrefix: 'Sort by:',
		items: [
			{ id: 'pickupDate', nameEn: 'Pickup date' },
			{ id: 'dropOffDate', nameEn: 'Drop off date' },
			{ id: 'createdOn', nameEn: 'Create date' }
		],
		itemKeyName: 'id',
		itemPrimaryName: 'nameEn'
	})
);

const mapActionToProps = (dispatch, {historyOrder}) => ({
	onSelectItem: (value) => {
		dispatch(historyOrder?changeHistoryOrderSort(value):changeActiveOrderSort());
	}
});

export default connect(mapStateToProps, mapActionToProps)(DropDownSelector);