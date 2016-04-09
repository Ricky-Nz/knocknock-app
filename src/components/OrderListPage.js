import React, { Component, PropTypes } from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import OrderListContainer from '../containers/OrderListContainer';
import AddressListContainer from '../containers/AddressListContainer';

class OrderListPage extends Component {
	constructor(props) {
		super(props);
		this.onNewOrder = this.onNewOrder.bind(this);
	}
	onNewOrder() {
		this.context.router.push('neworder');
	}
	render() {
		return (
			<div className='fillHeight' style={styles.container}>
				<AddressListContainer/>
		    <FloatingActionButton style={styles.floatBtn} onTouchTap={this.onNewOrder}>
		      <ContentAdd/>
		    </FloatingActionButton>
			</div>
		);
	}
}

OrderListPage.contextTypes = {
  router: React.PropTypes.object
};

const styles = {
	container: {
		position: 'relative'
	},
	floatBtn: {
		position: 'absolute',
		right: 20,
		bottom: 80
	}
};

export default OrderListPage;