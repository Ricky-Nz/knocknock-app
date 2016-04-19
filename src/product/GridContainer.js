import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getProducts } from '../actions';
import Grid from './Grid';

const loadingStateSelector = state => state.actionState.loadingProducts;

const filterSelector = state => state.appState.productFilter;

const searchSelector = state => state.appState.searchProduct;

const dataSelector = state => state.products;

const mapStateToProps = createSelector(
	loadingStateSelector,
	filterSelector,
	searchSelector,
	dataSelector,
	(loading, filter, search, products) => {
		if (filter!=='ALL') {
			products = products.filter(item => item.sub_category_id === filter);
		}
		if (search) {
			products = products.filter(item => item.name_en.search(search)>=0
				|| item.name_ch.search(search)>=0);
		}

		return {
			loading,
			products
		};
	}
);

const mapActionToProps = (dispatch) => ({
	loadProducts: () => {
		dispatch(getProducts());
	}
});

export default connect(mapStateToProps, mapActionToProps)(Grid);