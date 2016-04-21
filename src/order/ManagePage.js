import React, { Component, PropTypes } from 'react';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import CircularProgress from 'material-ui/CircularProgress';
import { ActionBar, EmptyView, AddButton } from '../widgets';
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
			<div className='flex flex-fill'>
				<ActionBar title={isActive?'Active Orders':'History Orders'}
					leftMenu={<IconButton onClick={this.context.router.goBack}><IconMenu/></IconButton>}
					rightMenu={<RefreshMenuContainer/>}/>
				<div className='flex flex-fill position-relative'>
					<List onItemClicked={this.onEditOrder} isActive={isActive}
						emptyView={<EmptyView text='no active order, click the + button below to make order'/>}/>
			    {isActive&&<AddButton style={styles.floatBtn} onClick={this.onNewOrder}/>}
				</div>
			</div>
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