import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui/List';
import ListItem from './ListItem';
import { LoadingProgress } from '../app_widgets';

class OrderList extends Component {
	componentDidMount() {
		!this.props.processing&&this.props.listOrders();
	}
	render() {
		const { emptyView, processing, orders, onItemClicked } = this.props;
		
		return (
			<List className='scroll'>
				{(processing&&!orders)?<LoadingProgress/>:
					((!orders||orders.length===0)?emptyView:
						orders.map((order, index) =>
							<ListItem key={index} onClick={() => onItemClicked(order)} {...order}/>)
					)
				}
			</List>
		);
	}
}

OrderList.propTypes = {
	isActive: PropTypes.bool.isRequired,
	emptyView: PropTypes.node,
	processing: PropTypes.bool,
	orders: PropTypes.array,
	onItemClicked: PropTypes.func.isRequired,
	listOrders: PropTypes.func.isRequired
};

export default OrderList;