import React, { Component } from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Subheader from 'material-ui/lib/Subheader';
import Divider from 'material-ui/lib/divider';
import PersonAdd from 'material-ui/lib/svg-icons/social/person-add';

class DashboardPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navOpen: false,
			selectMenu: this.updateNavbar(props.location.pathname)
		};
		this.onToggleDrawer = this.onToggleDrawer.bind(this);
		this.onMenuSelect = this.onMenuSelect.bind(this);
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
			case '/dashboard/profile': return 'profile';
			default: return 'orders';
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
	render() {
		const { navOpen, selectMenu } = this.state;

		return (
			<div className='fillHeight' style={styles.container}>
		    <LeftNav docked={false} open={navOpen}
		    	onRequestChange={this.onToggleDrawer}>
		    	<Subheader>Menus</Subheader>
		      <Menu value={selectMenu} onItemTouchTap={this.onMenuSelect}>
		        <MenuItem primaryText='Orders' leftIcon={<PersonAdd/>} value='orders'/>
		        <Divider />
		        <MenuItem primaryText='Address' leftIcon={<PersonAdd/>} value='addresses'/>
		        <MenuItem primaryText='Pricing' leftIcon={<PersonAdd/>} value='pricing'/>
		        <MenuItem primaryText='Wallet' leftIcon={<PersonAdd/>} value='wallet'/>
		        <MenuItem primaryText='Profile' leftIcon={<PersonAdd/>} value='profile'/>
		      </Menu>
		    </LeftNav>
		    {React.cloneElement(this.props.children, {onDrawerClick: this.onToggleDrawer})}
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