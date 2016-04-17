import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { TimeDisplay } from '../widgets';
import { yellowA100, blueGrey800 } from 'material-ui/styles/colors';
import IconPayment from 'material-ui/svg-icons/action/payment';
import IconButton from 'material-ui/IconButton';

let OrderListItem = ({id, paid, to_pay_price, pickup_address, status, created_on, onClick}) => (
	<Paper className='half-margin' zDepth={1}>
	  <ListItem style={(paid||!(to_pay_price > 0))?null:styles.requirePayment} onClick={onClick}
	  	primaryText={<p style={styles.primaryTest}>{`No.${id} (${status})`}</p>}
	  	rightIconButton={(paid||!(to_pay_price > 0))?null:<IconButton><IconPayment/></IconButton>}
	    secondaryText={
	    	<div>
	    		<p>Create date: <TimeDisplay>{created_on}</TimeDisplay></p>
	      	<p>Address: {pickup_address}</p>
	      </div>
	    } secondaryTextLines={2}/>
  </Paper>
);

OrderListItem.propTypes = {
	sortBy: PropTypes.string.isRequired
};

const styles = {
	primaryTest: {
		color: blueGrey800
	},
	requirePayment: {
		backgroundColor: yellowA100
	}
};

export default OrderListItem;

