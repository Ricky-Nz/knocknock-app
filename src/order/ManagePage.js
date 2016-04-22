import React, { Component, PropTypes } from 'react';
import { Page, EmptyView, AddButton } from '../app_widgets';
import List from './List';
import RefreshMenuContainer from './RefreshMenuContainer';

class OrderManagePage extends Component {
	onNewOrder = () => {
		this.context.router.push('order');
	}
	onEditOrder = (order) => {
		this.context.router.push(`order/${order.id}`);
	}
	render() {
		const isActive = this.props.location.pathname==='/home';

		return (
			<Page title={isActive?'Active Orders':'History Orders'}
				navCallback={this.props.location.query.navCallback}
				rightMenu={<RefreshMenuContainer/>}>
				<List onItemClicked={this.onEditOrder} isActive={isActive}
					emptyView={<EmptyView text='no active order, click the + button below to make order'/>}/>
		    {isActive&&<AddButton style={styles.floatBtn} onClick={this.onNewOrder}/>}
			</Page>
		);
	}
}

OrderManagePage.contextTypes = {
  router: React.PropTypes.object
};

const styles = {
	floatBtn: {
		position: 'absolute',
		right: 25,
		bottom: 25
	}
};

export default OrderManagePage;