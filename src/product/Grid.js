import React, { Component, PropTypes } from 'react';
import { GridList } from 'material-ui/GridList';
import { LoadingProgress, EmptyView } from '../app_widgets';
import GridItem from './GridItem';
import GridSelectableItemContainer from './GridSelectableItemContainer';

class ProductGrid extends Component {
	componentDidMount() {
		!this.props.loading&&!this.props.products&&this.props.loadProducts();
	}
	render() {
		const { selectable, processing, products } = this.props;

		if (processing&&!products) {
			return <LoadingProgress/>;
		} else if (!products) {
			return <EmptyView text='none available product'/>
		}

		return (
	    <GridList className='scroll half-padding' padding={4} cols={2}>
	    	{products.map((item, index) =>
		       selectable?<GridSelectableItemContainer key={index} {...item}/>
		       	:<GridItem key={index} {...item}/>)
	      }
	    </GridList>
		);
	}
}

ProductGrid.propTypes = {
	selectable: PropTypes.bool,
	processing: PropTypes.bool,
	products: PropTypes.array,
	listProducts: PropTypes.func.isRequired
};

ProductGrid.defaultProps = {
	selectable: false
};

export default ProductGrid;