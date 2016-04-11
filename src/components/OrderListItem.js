import React, { Proptypes } from 'react';
import Paper from 'material-ui/lib/paper';
import ListItem from 'material-ui/lib/lists/list-item';
import { TimeDisplay } from '../widgets';

let OrderListItem = ({pickupAddress, pickupDate, dropOffAddress,
	dropOffDate, totalPrice, orderStatus}) => (
	<Paper style={styles.container} zDepth={1}>
	  <ListItem primaryText={`${orderStatus.status} (Total Price: S${totalPrice})`}
	    secondaryText={
	    	<div>
	      	<p>Pickup Time: <TimeDisplay>{pickupDate}</TimeDisplay></p>
	      	<p>Pickup Address: {pickupAddress}</p>
	      </div>
	    }
	    secondaryTextLines={2}/>
  </Paper>
);

const styles = {
	container: {
		margin: '10px 10px'
	}
};

export default OrderListItem;