import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { changeProductFilter } from '../actions';
import { DropDownSelector } from '../widgets';

const dataSelector = state => state.categories;

const filterSelector = state => state.appState.productFilter;

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
		dispatch(changeProductFilter(value));
	}
});

export default connect(mapStateToProps, mapActionToProps)(DropDownSelector);