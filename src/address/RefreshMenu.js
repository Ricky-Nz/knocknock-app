import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import CircularProgress from 'material-ui/CircularProgress';

let RefreshMenu = ({processing, listAddresses}) => (
	<IconButton onClick={listAddresses}>{processing?<CircularProgress size={0.5}/>:<IconRefresh/>}</IconButton>
);

RefreshMenu.propTypes = {
	processing: PropTypes.bool,
	listAddresses: PropTypes.func.isRequired
};

export default RefreshMenu;