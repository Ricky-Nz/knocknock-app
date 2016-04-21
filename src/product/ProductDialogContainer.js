import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ProductDialog from './ProductDialog';

const productSelector = state => state.showProduct;

const mapStateToProps = createSelector(
	productSelector,
	(product) => ({product})
);

export default connect(mapStateToProps)(ProductDialog);