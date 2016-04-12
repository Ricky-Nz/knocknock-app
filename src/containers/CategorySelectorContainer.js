import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { DropDownSelector } from '../widgets';

const dataSelector = state => state.categories;

const mapStateToProps = createSelector(
	dataSelector,
	(items) => ({
		items: [{ id: 'ALL', nameEn: 'All', nameCn: '所有分类'}, ...items],
		itemKeyName: 'id',
		itemPrimaryName: 'nameEn',
		itemSecondaryName: 'nameCn'
	})
);

export default connect(mapStateToProps)(DropDownSelector);