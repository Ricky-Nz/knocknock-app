import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import { OrderSortSelector, OrderStatusSelector, OrderList } from '../containers';

class OrderManagePage extends Component {
	constructor(props) {
		super(props);
		this.onNewOrder = this.onNewOrder.bind(this);
		this.onOrderClicked = this.onOrderClicked.bind(this);
	}
	onNewOrder() {
		this.context.router.push('order');
	}
	onOrderClicked(order) {
		this.context.router.push(`order/${order.id}`);
	}
	render() {
		const { historyOrder, statusFilter, sortBy, sortOrder, loading } = this.props;

		return (
			<div className='flex flex-fill'>
				<AppBar title={historyOrder?'History Orders':'Active Orders'}
					iconElementLeft={<IconButton onClick={this.props.onDrawerClick}><IconMenu/></IconButton>}
					iconElementRight={loading?<CircularProgress size={0.5} color='white'/>:
						<IconButton onClick={this.props.loadOrders}><IconRefresh/></IconButton>}/>
				<div className='flex flex-fill position-relative'>
					<div className='flex flex-fill scroll'>
						{!historyOrder&&
							<div>
								<OrderStatusSelector historyOrder={historyOrder}/>
								<OrderSortSelector historyOrder={historyOrder}/>
							</div>
						}
						<OrderList statusFilter={historyOrder?'ALL':statusFilter}
							sortBy={historyOrder?'created_on':sortBy} sortOrder={historyOrder?true:sortOrder}
							onItemClicked={this.onOrderClicked}/>
					</div>
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
	statusFilter: PropTypes.string,
	sortBy: PropTypes.string,
	sortOrder: PropTypes.bool,
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