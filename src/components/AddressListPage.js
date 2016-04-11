import React, { Component, PropTypes } from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import AddressListContainer from '../containers/AddressListContainer';

class AddressListPage extends Component {
	constructor(props) {
		super(props);
		this.onEditAddress = this.onEditAddress.bind(this);
	}
	onEditAddress(address) {
		this.context.router.push(address.id?`address/${address.id}`:'address');
	}
	render() {
		return (
			<div className='fillHeight page' style={styles.container}>
				<AddressListContainer onItemClicked={this.onEditAddress}/>
		    <FloatingActionButton style={styles.floatBtn} onClick={this.onEditAddress}>
		      <ContentAdd/>
		    </FloatingActionButton>
			</div>
		);
	}
}

AddressListPage.contextTypes = {
  router: React.PropTypes.object
};

const styles = {
	container: {
		position: 'relative'
	},
	floatBtn: {
		position: 'absolute',
		right: 25,
		bottom: 85
	}
};

export default AddressListPage;