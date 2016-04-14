import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getProducts } from '../actions';
import ProductGrid from '../components/ProductGrid';

const loadingStateSelector = state => state.appState.loadingProducts;

const filterSelector = state => state.appState.productFilter;

const dataSelector = state => state.products;

const mapStateToProps = createSelector(
	loadingStateSelector,
	filterSelector,
	dataSelector,
	(loading, filter, products) => ({
		loading,
		products: filter==='ALL'?products:products.filter(item => item.sub_category_id === filter)
	})
);

const mapActionToProps = (dispatch) => ({
	loadProducts: () => {
		dispatch(getProducts());
	}
});

export default connect(mapStateToProps, mapActionToProps)(ProductGrid);