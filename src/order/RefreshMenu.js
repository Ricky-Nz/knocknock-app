import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import CircularProgress from 'material-ui/CircularProgress';

let RefreshMenu = ({processing, onClick}) => (
	<IconButton onClick={onClick}>{processing?<CircularProgress size={0.5}/>:<IconRefresh/>}</IconButton>
);

RefreshMenu.propTypes = {
	orderId: PropTypes.string,
	processing: PropTypes.bool,
	onClick: PropTypes.func.isRequired
};

export default RefreshMenu;