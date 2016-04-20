import React, { Component, PropTypes } from 'react';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import { OrderList } from '../containers';
import { ActionBar, EmptyView } from '../widgets';

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
		const isActive = this.props.location.pathname==='/home';

		return (
			<div className='flex flex-fill'>
				<ActionBar title={isActive?'Active Orders':'History Orders'} running={this.props.loading}
					leftIcon={this.props.onMenuClick?<IconMenu/>:<IconArrowBack/>} onLeftMenuClicked={this.props.onMenuClick||this.context.router.goBack}
					rightIcon={<IconRefresh/>} onRightMenuClicked={this.props.loadOrders}/>
				<div className='flex flex-fill position-relative'>
					<OrderList onItemClicked={this.onOrderClicked} isActive={isActive}
						emptyView={<EmptyView text='no active order, click the + button below to make order'/>}/>
			    {isActive&&
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
	loading: PropTypes.bool,
	loadOrders: PropTypes.func.isRequired,
	onMenuClick: PropTypes.func.isRequired
};

const styles = {
	floatBtn: {
		position: 'absolute',
		right: 25,
		bottom: 25
	}
};

export default OrderManagePage;