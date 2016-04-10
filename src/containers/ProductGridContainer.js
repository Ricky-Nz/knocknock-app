import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getProducts } from '../actions';
import ProductGrid from '../components/ProductGrid';

const loadingStateSelector = state => state.appState.loadingProducts;

const dataSelector = state => state.products;

const mapStateToProps = createSelector(
	loadingStateSelector,
	dataSelector,
	(loading, products) => ({loading, products})
);

const mapActionToProps = (dispatch) => ({
	loadProducts: () => {
		dispatch(getProducts());
	}
});

export default connect(mapStateToProps, mapActionToProps)(ProductGrid);