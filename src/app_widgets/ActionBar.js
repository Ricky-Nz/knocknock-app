import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

let ActionBar = ({title, leftMenu, rightMenu}) => (
	<AppBar title={title} iconElementLeft={leftMenu}
		iconElementRight={rightMenu}/>
);

ActionBar.propTypes = {
	title: PropTypes.string,
	leftMenu: PropTypes.element,
	rightMenu: PropTypes.element
};

export default ActionBar;