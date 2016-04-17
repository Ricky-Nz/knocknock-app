import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import { CategorySelector, ProductGrid } from '../containers';
import { ActionBar, SearchMenu } from '../widgets';

class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.state = {searchText: ''};
		this.onSearchTextChange = this.onSearchTextChange.bind(this);
	}
	onSearchTextChange(value) {
		this.setState({searchText: value});
	}
	render() {
		return (
			<div className='flex flex-fill'>
				<ActionBar title='Product Pricing'
					leftMenu={true} onLeftMenuClicked={this.props.onDrawerClick}/>
				<div className='flex flex-fill'>
					<CategorySelector/>
					<ProductGrid searchText={this.state.searchText}/>
				</div>
			</div>
		);
	}
}

ProductPage.contextTypes = {
  router: React.PropTypes.object
};

ProductPage.propTypes = {
	onDrawerClick: PropTypes.func
};

const styles = {

};

export default ProductPage;