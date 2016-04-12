import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/svg-icons/navigation/menu';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import OrderListContainer from '../containers/OrderListContainer';

class OrderListPage extends Component {
	constructor(props) {
		super(props);
		this.onNewOrder = this.onNewOrder.bind(this);
	}
	onNewOrder() {
		this.context.router.push('neworder');
	}
	render() {
		return (
			<div className='fillHeight page'>
				<AppBar title='My Orders'
					iconElementLeft={<IconButton onClick={this.props.onDrawerClick}><IconMenu/></IconButton>}/>
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

OrderListPage.contextTypes = {
  router: React.PropTypes.object
};

OrderListPage.propTypes = {
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

export default OrderListPage;