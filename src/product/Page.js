import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import { ActionBar, SearchMenu } from '../widgets';
import GridContainer from './GridContainer';
import CategoryFilter from './CategoryFilter';

class ProductPage extends Component {
	render() {
		const { navCallback } = this.props.location.query;

		return (
			<div className='flex flex-fill'>
				<ActionBar title='Product Pricing' leftIcon={navCallback?<IconMenu/>:<IconBack/>}
					onLeftMenuClicked={navCallback?this.props[navCallback]:this.context.router.goBack}
					customMenu={<SearchMenu onSearchTextChange={this.props.searchProduct}/>}/>
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

ProductPage.propTypes = {
	searchProduct: PropTypes.func.isRequired
};

export default ProductPage;