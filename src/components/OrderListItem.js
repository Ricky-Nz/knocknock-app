import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { TimeDisplay } from '../widgets';
import { yellowA100, blueGrey800 } from 'material-ui/styles/colors';
import IconPayment from 'material-ui/svg-icons/action/payment';
import IconButton from 'material-ui/IconButton';

function convertTypeDisplay(sortBy) {
	switch(sortBy) {
		case 'pickup_date': return 'Pickup date';
		case 'drop_off_date': return 'Drop off date';
		case 'created_on': return 'Create date';
	}
}

let OrderListItem = ({id, paid, sortBy, pickup_address, status, onClick, ...props}) => (
	<Paper style={styles.container} zDepth={1}>
	  <ListItem style={paid?null:styles.requirePayment} onClick={onClick}
	  	primaryText={<p style={styles.primaryTest}>{`No.${id} (${status})`}</p>}
	  	rightIconButton={paid?null:<IconButton><IconPayment/></IconButton>}
	    secondaryText={
	    	<div>
	    		<p>{convertTypeDisplay(sortBy)}: <TimeDisplay>{props[sortBy]}</TimeDisplay></p>
	      	<p>Address: {pickup_address}</p>
	      </div>
	    } secondaryTextLines={2}/>
  </Paper>
);

OrderListItem.propTypes = {
	sortBy: PropTypes.string.isRequired
};

const styles = {
	container: {
		margin: '10px 10px'
	},
	primaryTest: {
		color: blueGrey800
	},
	requirePayment: {
		backgroundColor: yellowA100
	}
};

export default OrderListItem;

