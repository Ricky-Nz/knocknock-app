import React, { Component, PropTypes } from 'react';
import ProductGridContainer from '../containers/ProductGridContainer';
import CategorySelectorContainer from '../containers/CategorySelectorContainer';

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

const styles = {

};

export default ProductPage;