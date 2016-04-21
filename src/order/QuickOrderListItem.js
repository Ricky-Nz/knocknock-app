import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import IconSend from 'material-ui/svg-icons/content/send';

class QuickOrderListItem extends Component {
	onQuickOrder = () => {
		const { defaultAddress, defaultPickupTime, toast, onClick } = this.props;
		if (!defaultAddress || !defaultPickupTime) {
			return toast('Please set the default pickup address and pickup time in Settings tab');
		}

		onClick&&onClick();
		this.context.router.push({
		  pathname: 'order',
		  query: { express: true }
		});
	}
	render() {
		return (
			<ListItem primaryText='Quick Order' leftIcon={<IconSend/>}
				secondaryText='Use your default settings' onClick={this.onQuickOrder}/>
		);
	}
}

QuickOrderListItem.contextTypes = {
  router: React.PropTypes.object
};

QuickOrderListItem.propTypes = {
	defaultAddress: PropTypes.object,
	defaultPickupTime: PropTypes.any,
	toast: PropTypes.func.isRequired
};

export default QuickOrderListItem;