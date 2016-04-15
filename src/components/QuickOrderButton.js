import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class QuickOrderButton extends Component {
	constructor(props) {
		super(props);
		this.onQuickOrder = this.onQuickOrder.bind(this);
	}
	onQuickOrder() {
		const { address, pickupTime, toast } = this.props;
		if (!address || !pickupTime) {
			toast('Please set the default pickup address and pickup time in Settings tab');
			return;
		}

		this.context.router.push({
		  pathname: 'order',
		  query: { express: true }
		});
	}
	render() {
		return (
			<RaisedButton label='Quick Order' fullWidth={true} primary={true}
				onClick={this.onQuickOrder}/>
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