import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui/List';
import OrderListItem from './OrderListItem';
import { LoadingProgress } from '../widgets';

class OrderList extends Component {
	componentDidMount() {
		!this.props.orders&&this.props.loadOrders();
	}
	render() {
		const { emptyView, loading, orders, onItemClicked } = this.props;
		
		return (
			<List style={styles.container}>
				{(loading&&!orders)?<LoadingProgress/>:
					((!orders||orders.length===0)?emptyView:
						orders.map((order, index) =>
							<OrderListItem key={index} onClick={() => onItemClicked(order)} {...order}/>)
					)
				}
			</List>
		);
	}
}

OrderList.propTypes = {
	emptyView: PropTypes.node,
	loading: PropTypes.bool,
	orders: PropTypes.array,
	onItemClicked: PropTypes.func.isRequired,
	loadOrders: PropTypes.func.isRequired
};

const styles = {
	container: {
		paddingTop: '0px',
		overflow: 'auto'
	}
};

export default OrderList;