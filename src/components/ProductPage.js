import React, { Component, PropTypes } from 'react';
import ProductGridContainer from '../containers/ProductGridContainer';

class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.onEditAddress = this.onEditAddress.bind(this);
	}
	onEditAddress(event, addressId) {
		this.context.router.push(addressId?`address/${addressId}`:'address');
	}
	render() {
		return (
			<div className='fillHeight page'>
				<ProductGridContainer/>
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