import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/svg-icons/navigation/menu';
import ProductGridContainer from '../containers/ProductGridContainer';
import { CategorySelector } from '../containers';
import { SearchMenu } from '../widgets';

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
				<AppBar title='Product Pricing'
					iconElementLeft={<IconButton onClick={this.props.onDrawerClick}><IconMenu/></IconButton>}
					iconElementRight={<SearchMenu onSearchTextChange={this.onSearchTextChange}/>}/>
				<div className='flex flex-fill'>
					<CategorySelector/>
					<ProductGridContainer searchText={this.state.searchText}/>
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