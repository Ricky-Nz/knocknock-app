import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import IconSend from 'material-ui/svg-icons/content/send';

class QuickOrderButton extends Component {
	constructor(props) {
		super(props);
		this.onQuickOrder = this.onQuickOrder.bind(this);
	}
	onQuickOrder() {
		const { address, pickupTime, toast, onClick } = this.props;
		if (!address || !pickupTime) {
			toast('Please set the default pickup address and pickup time in Settings tab');
			return;
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

QuickOrderButton.contextTypes = {
  router: React.PropTypes.object
};

QuickOrderButton.propTypes = {
	address: PropTypes.object,
	pickupTime: PropTypes.any,
	toast: PropTypes.func.isRequired
};

export default QuickOrderButton;