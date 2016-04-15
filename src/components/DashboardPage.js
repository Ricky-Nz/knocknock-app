import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import IconHistory from 'material-ui/svg-icons/action/history';
import IconLocalShipping from 'material-ui/svg-icons/maps/local-shipping';
import IconPlace from 'material-ui/svg-icons/maps/place';
import IconMoney from 'material-ui/svg-icons/editor/attach-money';
import IconWallet from 'material-ui/svg-icons/action/account-balance-wallet';
import IconSettings from 'material-ui/svg-icons/action/settings';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { UserCard } from '../containers';

class DashboardPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navOpen: false,
			selectMenu: this.updateNavbar(props.location.pathname)
		};
		this.onToggleDrawer = this.onToggleDrawer.bind(this);
		this.onMenuSelect = this.onMenuSelect.bind(this);
		this.onSelectUser = this.onSelectUser.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.location.pathname !== this.props.location.pathname) {
			this.setState({selectMenu: this.updateNavbar(nextProps.location.pathname)});
		}
	}
	updateNavbar(pathname) {
		switch(pathname) {
			case '/dashboard/addresses': return 'addresses';
			case '/dashboard/pricing': return 'pricing';
			case '/dashboard/wallet': return 'wallet';
			case '/dashboard/setting': return 'setting';
			case '/dashboard':
			case '/dashboard/activeorders': return 'activeorders';
			case '/dashboard/historyorders': return 'historyorders';
			default: return null;
		}
	}
	onToggleDrawer() {
		this.setState({navOpen: !this.state.navOpen});
	}
	onMenuSelect(event, item) {
		if (item.props.value !== this.state.selectMenu) {
			this.context.router.replace(`dashboard/${item.props.value}`);
		}

		this.setState({navOpen: false});
	}
	onSelectUser() {
		if ('profile' !== this.state.selectMenu) {
			this.context.router.replace(`dashboard/profile`);
		}

		this.setState({navOpen: false});
	}
	render() {
		const { navOpen, selectMenu } = this.state;

		return (
			<div className='flex flex-fill page' style={styles.container}>
		    <Drawer docked={false} open={navOpen}
		    	onRequestChange={this.onToggleDrawer}>
		    	<UserCard onClick={this.onSelectUser}/>
		      <Menu value={selectMenu} onItemTouchTap={this.onMenuSelect}>
		        <MenuItem primaryText='Active order' leftIcon={<IconLocalShipping/>} value='activeorders'/>
		        <MenuItem primaryText='History order' leftIcon={<IconHistory/>} value='historyorders'/>
		        <MenuItem primaryText='Address' leftIcon={<IconPlace/>} value='addresses'/>
		        <MenuItem primaryText='Pricing' leftIcon={<IconMoney/>} value='pricing'/>
		        <MenuItem primaryText='Wallet' leftIcon={<IconWallet/>} value='wallet'/>
		        <MenuItem primaryText='Settings' leftIcon={<IconSettings/>} value='setting'/>
		      </Menu>
		    </Drawer>
			    {React.cloneElement(this.props.children||<div/>,
			    	{onDrawerClick: this.onToggleDrawer, key: selectMenu, historyOrder: selectMenu==='historyorders'})}
			</div>
		);
	}
}

DashboardPage.contextTypes = {
  router: React.PropTypes.object
};

const styles = {
	container: {
		overflow: 'hidden'
	}
};

export default DashboardPage;