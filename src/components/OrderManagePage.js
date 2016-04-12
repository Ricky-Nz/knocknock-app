import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconRefresh from 'material-ui/lib/svg-icons/navigation/refresh';
import IconMenu from 'material-ui/lib/svg-icons/navigation/menu';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import OrderListContainer from '../containers/OrderListContainer';
import CircularProgress from 'material-ui/lib/circular-progress';

class OrderManagePage extends Component {
	constructor(props) {
		super(props);
		this.onNewOrder = this.onNewOrder.bind(this);
		this.onRefresh = this.onRefresh.bind(this);
	}
	onNewOrder() {
		this.context.router.push('neworder');
	}
	onRefresh() {
		this.props.loadOrders();
	}
	render() {
		return (
			<div className='fillHeight page'>
				<AppBar title='My Orders'
					iconElementLeft={<IconButton onClick={this.props.onDrawerClick}><IconMenu/></IconButton>}
					iconElementRight={this.props.loading?<CircularProgress size={0.5} color='white'/>:
						<IconButton onClick={this.onRefresh}><IconRefresh/></IconButton>}/>
				<div style={styles.container}>
					<OrderListContainer/>
			    <FloatingActionButton style={styles.floatBtn} onClick={this.onNewOrder}>
			      <ContentAdd/>
			    </FloatingActionButton>
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
	onDrawerClick: PropTypes.func.isRequired
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

export default OrderManagePage;