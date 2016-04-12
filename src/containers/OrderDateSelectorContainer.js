import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { changeOrderSort } from '../actions';
import { DropDownSelector } from '../widgets';

const orderSortSelector = state => state.appState.orderSortType;

const dataSelector = state => state.orders;

const mapStateToProps = createSelector(
	orderSortSelector,
	dataSelector,
	(orderSortType, orders) => ({
		selectedKey: orderSortType,
		items: [
			{ id: 'pickupDate', nameEn: 'Pickup date', nameCn: '取件时间' },
			{ id: 'dropOffDate', nameEn: 'Drop off date', nameCn: '送还时间' },
			{ id: 'createdOn', nameEn: 'Create date', nameCn: '下单时间' }
		],
		itemKeyName: 'id',
		itemPrimaryName: 'nameEn',
		itemSecondaryName: 'nameCn'
	})
);

const mapActionToProps = dispatch => ({
	onSelectItem: (value) => {
		dispatch(changeOrderSort(value));
	}
});

export default connect(mapStateToProps, mapActionToProps)(DropDownSelector);