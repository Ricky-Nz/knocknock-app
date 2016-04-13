import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconRefresh from 'material-ui/lib/svg-icons/navigation/refresh';
import IconMenu from 'material-ui/lib/svg-icons/navigation/menu';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import CircularProgress from 'material-ui/lib/circular-progress';
import OrderListContainer from '../containers/OrderListContainer';
import OrderSortSelectorContainer from '../containers/OrderSortSelectorContainer';
import OrderStatusSelectorContainer from '../containers/OrderStatusSelectorContainer';

class OrderManagePage extends Component {
	constructor(props) {
		super(props);
		this.onNewOrder = this.onNewOrder.bind(this);
		this.onRefresh = this.onRefresh.bind(this);
		this.onOrderClicked = this.onOrderClicked.bind(this);
	}
	onNewOrder() {
		this.context.router.push('neworder');
	}
	onRefresh() {
		this.props.loadOrders();
	}
	onOrderClicked(order) {
		this.context.router.push(`order/${order.id}`);
	}
	render() {
		const { historyOrder, loading } = this.props;

		return (
			<div className='flex flex-fill'>
				<AppBar title={historyOrder?'History Orders':'Active Orders'}
					iconElementLeft={<IconButton onClick={this.props.onDrawerClick}><IconMenu/></IconButton>}
					iconElementRight={loading?<CircularProgress size={0.5} color='white'/>:
						<IconButton onClick={this.onRefresh}><IconRefresh/></IconButton>}/>
				<div className='flex flex-row'>
					<OrderStatusSelectorContainer historyOrder={historyOrder} className='flex-fill'/>
					<OrderSortSelectorContainer historyOrder={historyOrder} className='flex-fill'/>
				</div>
				<div className='flex flex-fill position-relative'>
					<OrderListContainer historyOrder={historyOrder}
						onItemClicked={this.onOrderClicked}/>
			    {!historyOrder&&
			    	<FloatingActionButton style={styles.floatBtn} onClick={this.onNewOrder}>
			      	<ContentAdd/>
			    	</FloatingActionButton>
			    }
				</div>
			</div>
		);
	}
}

OrderManagePage.contextTypes = {
  router: React.PropTypes.object
};

OrderManagePage.propTypes = {
	historyOrder: PropTypes.bool,
	loading: PropTypes.bool,
	loadOrders: PropTypes.func.isRequired,
	onDrawerClick: PropTypes.func.isRequired
};

const styles = {
	floatBtn: {
		position: 'absolute',
		right: 25,
		bottom: 25
	}
};

export default OrderManagePage;