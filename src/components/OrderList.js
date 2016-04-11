import React, { Component, PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import CircularProgress from 'material-ui/lib/circular-progress';
import OrderListItem from './OrderListItem';

class OrderList extends Component {
	componentDidMount() {
		!this.props.orders&&this.props.loadOrders();
	}
	render() {
		const { loading, orders } = this.props;
		
		return (
			<List className='fillHeight' style={styles.container}>
				{loading?<CircularProgress size={0.8}/>:
					(orders&&orders.map((order, index) => (
						<OrderListItem key={index} {...order}/>
					)))
				}
			</List>
		);
	}
}

OrderList.propTypes = {
	loading: PropTypes.bool,
	orders: PropTypes.array,
	loadOrders: PropTypes.func.isRequired
};

const styles = {
	container: {
		overflow: 'auto'
	}
};

export default OrderList;