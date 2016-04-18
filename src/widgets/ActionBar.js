import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import CircularProgress from 'material-ui/CircularProgress';

let ActionBar = ({title, leftIcon, rightIcon,
	onLeftMenuClicked, onRightMenuClicked, running}) => (
	<AppBar title={title}
	  iconElementLeft={<IconButton onClick={onLeftMenuClicked}>{leftIcon}</IconButton>}
		iconElementRight={running?<CircularProgress size={0.5} color='white'/>:
			(rightIcon?<IconButton onClick={onRightMenuClicked}>{rightIcon}</IconButton>:null)}/>
);

ActionBar.propTypes = {
	title: PropTypes.string,
	leftIcon: PropTypes.element,
	rightIcon: PropTypes.element,
	onLeftMenuClicked: PropTypes.func,
	onRightMenuClicked: PropTypes.func,
	running: PropTypes.bool
};

export default ActionBar;