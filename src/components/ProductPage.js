import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
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
				<ActionBar title='Product Pricing' leftIcon={this.props.onMenuClick?<IconMenu/>:<IconArrowBack/>}
					onLeftMenuClicked={this.props.onMenuClick||this.context.router.goBack}
					customMenu={<SearchMenu onSearchTextChange={this.onSearchTextChange}/>}/>
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
	onMenuClick: PropTypes.func
};

const styles = {

};

export default ProductPage;