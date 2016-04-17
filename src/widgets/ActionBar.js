import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import CircularProgress from 'material-ui/CircularProgress';

let ActionBar = ({title, leftMenu, rightIcon,
	onLeftMenuClicked, onRightMenuClicked, running}) => (
	<AppBar title={title}
	  iconElementLeft={<IconButton onClick={onLeftMenuClicked}>{leftMenu?<IconMenu/>:<IconArrowBack/>}</IconButton>}
		iconElementRight={running?<CircularProgress size={0.5} color='white'/>:
			(rightIcon?<IconButton onClick={onRightMenuClicked}>{rightIcon}</IconButton>:null)}/>
);

ActionBar.propTypes = {
	title: PropTypes.string,
	leftMenu: PropTypes.bool,
	rightIcon: PropTypes.element,
	onLeftMenuClicked: PropTypes.func,
	onRightMenuClicked: PropTypes.func,
	running: PropTypes.bool
};

export default ActionBar;