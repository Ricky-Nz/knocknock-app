import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { listProducts } from '../actions';
import Grid from './Grid';

const statusSelector = state => state.productStatus.processing;

const filterSelector = state => state.selectedFiler;

const searchSelector = state => state.productSearchText;

const dataSelector = state => state.products;

const mapStateToProps = createSelector(
	statusSelector,
	filterSelector,
	searchSelector,
	dataSelector,
	(processing, filter, search, products) => {
		if (filter!=='ALL') {
			products = products.filter(item => item.sub_category_id === filter);
		}
		
		if (search) {
			products = products.filter(item => item.name_en.search(search)>=0
				|| item.name_ch.search(search)>=0);
		}

		return {
			processing,
			products
		};
	}
);

const mapActionToProps = (dispatch) => ({
	listProducts: () => {
		dispatch(listProducts());
	}
});

export default connect(mapStateToProps, mapActionToProps)(Grid);