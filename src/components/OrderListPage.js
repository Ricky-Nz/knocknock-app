import React, { Component, PropTypes } from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import OrderListContainer from '../containers/OrderListContainer';

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
				<OrderListContainer/>
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
		right: 25,
		bottom: 85
	}
};

export default OrderListPage;