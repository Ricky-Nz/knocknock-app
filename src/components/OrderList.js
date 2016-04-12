import React, { Component, PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import OrderListItem from './OrderListItem';
import { LoadingProgress } from '../widgets';

class OrderList extends Component {
	componentDidMount() {
		!this.props.orders&&this.props.loadOrders();
	}
	render() {
		const { loading, orderSortType, orders } = this.props;
		
		return (
			<List className='fillHeight' style={styles.container}>
				{(loading&&!orders)?<LoadingProgress/>:
					(orders&&orders.map((order, index) => (
						<OrderListItem key={index} orderSortType={orderSortType} {...order}/>
					)))
				}
			</List>
		);
	}
}

OrderList.propTypes = {
	loading: PropTypes.bool,
	orders: PropTypes.array,
	orderSortType: PropTypes.string.isRequired,
	loadOrders: PropTypes.func.isRequired
};

const styles = {
	container: {
		paddingTop: '0px',
		overflow: 'auto'
	}
};

export default OrderList;