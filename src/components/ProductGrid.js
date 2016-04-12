import React, { Component, PropTypes } from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import ProductGridItem from './ProductGridItem';
import { LoadingProgress } from '../widgets';

class ProductGrid extends Component {
	componentDidMount() {
		!this.props.products&&this.props.loadProducts();
	}
	render() {
		let { loading, products, filterCategoryId } = this.props;

		if (filterCategoryId&&products) {
			products = products.filter(product => product.subCategoryId === filterCategoryId);
		}
		
		return (
	    <GridList className='fillHeight' style={styles.gridList}>
	    	{loading?<LoadingProgress/>:
	      	(products&&products.map((product, index) => (
	        	<ProductGridItem key={index} {...product}/>
	      	)))
	      }
	    </GridList>
		);
	}
}

ProductGrid.propTypes = {
	loading: PropTypes.bool,
	products: PropTypes.array,
	filterCategoryId: PropTypes.any,
	loadProducts: PropTypes.func.isRequired
};

const styles = {
  gridList: {
    overflowY: 'auto',
    padding: '0px 8px'
  }
};

export default ProductGrid;