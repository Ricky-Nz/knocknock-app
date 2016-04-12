import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/svg-icons/navigation/menu';
import ProductGridContainer from '../containers/ProductGridContainer';
import CategorySelectorContainer from '../containers/CategorySelectorContainer';
import ProductSearchMenu from '../containers/ProductSearchMenu';

class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.state = { selectCategory: null };
		this.onSelectCategory = this.onSelectCategory.bind(this);
	}
	onSelectCategory(categoryId) {
		this.setState({selectCategory: categoryId});
	}
	render() {
		return (
			<div className='fillHeight page'>
				<AppBar title='Product Pricing'
					iconElementLeft={<IconButton onClick={this.props.onDrawerClick}><IconMenu/></IconButton>}
					iconElementRight={<ProductSearchMenu/>}/>
				<CategorySelectorContainer selectedKey={this.state.selectCategory}
					onSelectItem={this.onSelectCategory}/>
				<ProductGridContainer filterCategoryId={this.state.selectCategory}/>
			</div>
		);
	}
}

ProductPage.contextTypes = {
  router: React.PropTypes.object
};

ProductPage.propTypes = {
	onDrawerClick: PropTypes.func.isRequired
};

const styles = {

};

export default ProductPage;