import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui/List';
import OrderListItem from './OrderListItem';
import { LoadingProgress } from '../widgets';

class OrderList extends Component {
	componentDidMount() {
		!this.props.orders&&this.props.loadOrders();
	}
	render() {
		const { loading, sortBy, orders, onItemClicked } = this.props;
		
		return (
			<List style={styles.container}>
				{(loading&&!orders)?<LoadingProgress/>:
					(orders&&orders.map((order, index) => (
						<OrderListItem key={index} onClick={() => onItemClicked(order)}
							sortBy={sortBy} {...order}/>
					)))
				}
			</List>
		);
	}
}

OrderList.propTypes = {
	loading: PropTypes.bool,
	orders: PropTypes.array,
	statusFilter: PropTypes.string.isRequired,
	sortBy: PropTypes.string.isRequired,
	sortOrder: PropTypes.bool.isRequired,
	onItemClicked: PropTypes.func.isRequired,
	loadOrders: PropTypes.func.isRequired
};

const styles = {
	container: {
		paddingTop: '0px'
	}
};

export default OrderList;