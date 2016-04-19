import React, { Component, PropTypes } from 'react';
import { GridList } from 'material-ui/GridList';
import { LoadingProgress, EmptyView } from '../widgets';
import GridItem from './GridItem';
import GridSelectableItem from './GridSelectableItem';

class ProductGrid extends Component {
	componentDidMount() {
		!this.props.loading&&!this.props.products&&this.props.loadProducts();
	}
	render() {
		let { selectable, loading, products } = this.props;

		if (loading&&!products) {
			return <LoadingProgress/>;
		} else if (!products) {
			return <EmptyView text='none available product'/>
		}

		return (
	    <GridList className='scroll half-padding' padding={4} cols={2}>
	    	{products.map((item, index) =>
		       selectable?<GridSelectableItem key={index} {...item}/>
		       	:<GridItem key={index} {...item}/>)
	      }
	    </GridList>
		);
	}
}

ProductGrid.propTypes = {
	selectable: PropTypes.bool,
	loading: PropTypes.bool,
	products: PropTypes.array,
	loadProducts: PropTypes.func.isRequired
};

ProductGrid.defaultProps = {
	selectable: false
};

export default ProductGrid;