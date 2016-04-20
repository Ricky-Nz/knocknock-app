import React, { Component } from 'react';
import HomeDrawer from './HomeDrawer';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drawerOpen: false
		};
		this.onDrawerChange = this.onDrawerChange.bind(this);
		this.onOpenDrawer = this.onOpenDrawer.bind(this);
	}
	onDrawerChange(open, reason, newPath) {
		this.setState({drawerOpen: open});
		if (newPath && (newPath !== this.props.location.pathname)) {
			this.context.router.replace(newPath, {navCallback: 'openDrawer'});
		}
	}
	onOpenDrawer() {
		this.setState({drawerOpen: true});
	}
	render() {
		return (
			<div className='flex flex-fill page'>
		    <HomeDrawer open={this.state.drawerOpen} path={this.props.location.pathname}
		    	onRequestChange={this.onDrawerChange}/>
		    {React.cloneElement(this.props.children, {openDrawer: this.onOpenDrawer})}
			</div>
		);
	}
}

HomePage.contextTypes = {
  router: React.PropTypes.object
};

export default HomePage;

