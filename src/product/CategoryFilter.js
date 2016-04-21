import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { filterProduct } from './actions';
import { DropDownSelector } from '../app_widgets';

const dataSelector = state => state.categories;

const filterSelector = state => state.selectedFilter;

const mapStateToProps = createSelector(
	dataSelector,
	filterSelector,
	(items, filter) => {
		return {
			items: items?[{ id: 'ALL', name_en: 'All', name_ch: '所有分类'}, ...items]
				:[{ id: 'ALL', name_en: 'All', name_ch: '所有分类'}],
			itemKeyName: 'id',
			itemPrimaryName: 'name_en',
			itemSecondaryName: 'name_ch',
			selectedKey: filter
		};
	}
);

const mapActionToProps = (dispatch) => ({
	onSelectItem: (value) => {
		dispatch(filterProduct(value));
	}
});

export default connect(mapStateToProps, mapActionToProps)(DropDownSelector);