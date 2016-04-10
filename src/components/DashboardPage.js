import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/svg-icons/navigation/menu';
import LeftNav from 'material-ui/lib/left-nav';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Subheader from 'material-ui/lib/Subheader';
import Divider from 'material-ui/lib/divider';
import PersonAdd from 'material-ui/lib/svg-icons/social/person-add';

class DashboardPage extends Component {
	constructor(props) {
		super(props);
		this.state = {navOpen: false, selectMenu: 'orders'};
		this.onToggleDrawer = this.onToggleDrawer.bind(this);
		this.onMenuSelect = this.onMenuSelect.bind(this);
	}
	onToggleDrawer() {
		this.setState({navOpen: !this.state.navOpen});
	}
	onMenuSelect(event, item) {
		if (item.props.value !== this.state.selectMenu) {
			this.context.router.replace(`dashboard/${item.props.value}`);
		}

		this.setState({
			navOpen: false,
			selectMenu: item.props.value
		});
	}
	render() {
		const { navOpen, selectMenu } = this.state;

		return (
			<div className='fillHeight' style={styles.container}>
				<AppBar style={styles.actonbar} title='Knocknock'
					iconElementLeft={<IconButton onTouchTap={this.onToggleDrawer}><IconMenu/></IconButton>}/>
		    <LeftNav docked={false} open={navOpen}
		    	onRequestChange={this.onToggleDrawer}>
		    	<Subheader>Menus</Subheader>
		      <Menu value={selectMenu} onItemTouchTap={this.onMenuSelect}>
		        <MenuItem primaryText='Orders' leftIcon={<PersonAdd/>} value='orders'/>
		        <Divider />
		        <MenuItem primaryText='Address' leftIcon={<PersonAdd/>} value='addressed'/>
		      </Menu>
		    </LeftNav>
		    {this.props.children}
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