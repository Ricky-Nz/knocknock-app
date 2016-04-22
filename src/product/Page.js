import React, { Component, PropTypes } from 'react';
import GridContainer from './GridContainer';
import CategoryFilter from './CategoryFilter';
import ProductSearchMenu from './ProductSearchMenu';

class ProductPage extends Component {
	render() {
		return (
			<Page title='Product Pricing'
				navCallback={this.props.location.query.navCallback}
				rightMenu={<ProductSearchMenu/>}>
				<CategoryFilter/>
				<GridContainer/>
			</Page>
		);
	}
}

export default ProductPage;