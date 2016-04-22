import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import ActionBar from './ActionBar';

class Page extends Component {
	render() {
		const { title, leftMenu, rightMenu, navCallback, children } = this.props;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title={title}
					leftMenu={
						<IconButton onClick={navCallback?this.props[navCallback]:this.context.router.goBack}>
							{navCallback?<IconMenu/>:(leftMenu||<IconBack/>)}
						</IconButton>
					} rightMenu={rightMenu}/>
				<div className='flex flex-fill position-relative'>
					{children}
				</div>
			</div>
		);
	}
}

Page.contextTypes = {
  router: React.PropTypes.object
};

Page.propTypes = {
	title: PropTypes.string.isRequired,
	leftMenu: PropTypes.element,
	rightMenu: PropTypes.element,
	navCallback: PropTypes.string
};

export default Page;