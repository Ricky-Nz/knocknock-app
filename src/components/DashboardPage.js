import React, { Component } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/svg-icons/navigation/menu';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

class DashboardPage extends Component {
	constructor(props) {
		super(props);
		this.state = {navOpen: false};
		this.onToggleDrawer = this.onToggleDrawer.bind(this);
	}
	onToggleDrawer() {
		this.setState({navOpen: !this.state.navOpen});
	}
	render() {
		return (
			<div className='fillHeight' style={styles.container}>
				<AppBar style={styles.actonbar} title='Knocknock'
					iconElementLeft={<IconButton onTouchTap={this.onToggleDrawer}><IconMenu/></IconButton>}/>
		    <LeftNav open={this.state.navOpen}>
		      <MenuItem>Menu Item</MenuItem>
		      <MenuItem>Menu Item 2</MenuItem>
		    </LeftNav>
		    {this.props.children}
			</div>
		);
	}
}

const styles = {
	container: {
		overflow: 'hidden'
	}
};

export default DashboardPage;