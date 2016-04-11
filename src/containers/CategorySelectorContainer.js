import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import DropDownSelector from '../components/DropDownSelector';

const dataSelector = state => state.categories;

const mapStateToProps = createSelector(
	dataSelector,
	(items) => ({
		items,
		itemKeyName: 'id',
		itemPrimaryName: 'nameEn',
		itemSecondaryName: 'nameCn'
	})
);

export default connect(mapStateToProps)(DropDownSelector);