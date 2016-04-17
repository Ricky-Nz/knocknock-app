import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import IconHistory from 'material-ui/svg-icons/action/history';
import IconLocalShipping from 'material-ui/svg-icons/maps/local-shipping';
import IconPlace from 'material-ui/svg-icons/maps/place';
import IconMoney from 'material-ui/svg-icons/editor/attach-money';
import IconWallet from 'material-ui/svg-icons/action/account-balance-wallet';
import IconSettings from 'material-ui/svg-icons/action/settings';
import IconGift from 'material-ui/svg-icons/action/card-giftcard';
import { UserCard, QuickOrderButton } from '../containers';

class HomeDrawer extends Component {
	constructor(props) {
		super(props);
		this.onMenuSelect = this.onMenuSelect.bind(this);
		this.onSelectUser = this.onSelectUser.bind(this);
		this.onQuickOrder = this.onQuickOrder.bind(this);
	}
	onMenuSelect(event, item) {
		this.props.onRequestChange(false, 'click', item.props.value);
	}
	onSelectUser() {
		this.props.onRequestChange(false, 'click', '/home/profile');
	}
	onQuickOrder() {
		this.props.onRequestChange(false, 'click');	
	}
	render() {
		return (
			<Drawer docked={false} open={this.props.open} onRequestChange={this.props.onRequestChange}>
				<UserCard onClick={this.onSelectUser}/>
				<QuickOrderButton onClick={this.onQuickOrder}/>
				<Divider/>
			  <Menu value={this.props.path} onItemTouchTap={this.onMenuSelect}>
			    <MenuItem primaryText='Active Orders' leftIcon={<IconLocalShipping/>} value='/home'/>
			    <MenuItem primaryText='History Orders' leftIcon={<IconHistory/>} value='/home/history'/>
			    <MenuItem primaryText='Address' leftIcon={<IconPlace/>} value='/home/addresses'/>
			    <MenuItem primaryText='Pricing' leftIcon={<IconMoney/>} value='/home/pricing'/>
			    <MenuItem primaryText='Wallet' leftIcon={<IconWallet/>} value='/home/wallet'/>
			    <MenuItem primaryText='Voucher' leftIcon={<IconGift/>} value='/home/voucher'/>
			    <MenuItem primaryText='Settings' leftIcon={<IconSettings/>} value='/home/setting'/>
			  </Menu>
			  <br/><br/><br/>
			</Drawer>
		);
	}
}

HomeDrawer.propTypes = {
	path: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	onRequestChange: PropTypes.func.isRequired
};

export default HomeDrawer;

