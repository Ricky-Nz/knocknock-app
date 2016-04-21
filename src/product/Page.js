import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import { ActionBar } from '../app_widgets';
import GridContainer from './GridContainer';
import CategoryFilter from './CategoryFilter';
import ProductSearchMenu from './ProductSearchMenu';

class ProductPage extends Component {
	render() {
		const { navCallback } = this.props.location.query;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title='Product Pricing'
					leftMenu={<IconButton onClick={navCallback?this.props[navCallback]:this.context.router.goBack}>{navCallback?<IconMenu/>:<IconBack/>}</IconButton>}
					rightMenu={<ProductSearchMenu/>}/>
				<div className='flex flex-fill position-relative'>
					<CategoryFilter/>
					<GridContainer/>
				</div>
			</div>
		);
	}
}

ProductPage.contextTypes = {
  router: React.PropTypes.object
};

export default ProductPage;