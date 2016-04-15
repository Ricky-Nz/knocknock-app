import React, { Component, PropTypes } from 'react';
import { GridList } from 'material-ui/GridList';
import ProductGridItem from './ProductGridItem';
import { LoadingProgress } from '../widgets';

class ProductGrid extends Component {
	componentDidMount() {
		!this.props.loading&&!this.props.products&&this.props.loadProducts();
	}
	render() {
		let { loading, searchText, products } = this.props;
		
		if (loading) {
			return <LoadingProgress/>;
		}

		return (
	    <GridList style={styles.gridList}>
	    	{products&&
	    		products
	    			.filter(item =>
	    				searchText?(item.name_en.search(searchText)>=0||item.name_ch.search(searchText)>=0):true)
	    			.map((item, index) => (
		        	<ProductGridItem key={index} {...item}/>
		      	))
	      }
	    </GridList>
		);
	}
}

ProductGrid.propTypes = {
	loading: PropTypes.bool,
	searchText: PropTypes.string,
	products: PropTypes.array,
	loadProducts: PropTypes.func.isRequired
};

const styles = {
  gridList: {
    overflowY: 'auto',
    padding: '0 8'
  }
};

export default ProductGrid;