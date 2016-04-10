import React, { Component, PropTypes } from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import CircularProgress from 'material-ui/lib/circular-progress';
import ProductGridItem from './ProductGridItem';

class ProductGrid extends Component {
	componentDidMount() {
		this.props.loadProducts();
	}
	render() {
		const { loading, products } = this.props;
		
		return (
	    <GridList cellHeight={200} style={styles.gridList}>
	    	{loading?<CircularProgress size={0.8}/>:
	      	products.map((product, index) => (
	        	<ProductGridItem key={index} {...product}/>
	      	))
	      }
	    </GridList>
		);
	}
}

ProductGrid.propTypes = {
	loading: PropTypes.bool,
	products: PropTypes.array,
	loadProducts: PropTypes.func.isRequired
};

const styles = {
  gridList: {
    width: 500,
    height: 400,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

export default ProductGrid;