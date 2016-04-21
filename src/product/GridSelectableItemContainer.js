import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { selectProduct } from './actions';
import GridSelectableItem from '../components/GridSelectableItem';

const checkedSelector = (state, {id}) => state.selectedProducts[id];

const mapStateToProps = createSelector(
	checkedSelector,
	(checked) => ({checked})
);

const mapActionToProps = (dispatch, {id}) => ({
	selectProduct: () => {
		dispatch(selectProduct(id));
	}
});

export default connect(mapStateToProps, mapActionToProps)(GridSelectableItem);