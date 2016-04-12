import React, { PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import ListItem from 'material-ui/lib/lists/list-item';
import Subheader from 'material-ui/lib/Subheader';
import { TimeDisplay } from '../widgets';

function convertTypeDisplay(orderSortType) {
	switch(orderSortType) {
		case 'pickupDate': return 'Pickup date';
		case 'dropOffDate': return 'Drop off date';
		case 'createdOn': return 'Create date';
	}
}

let OrderListItem = ({orderSortType, pickupAddress, totalPrice, orderStatus, ...props}) => (
	<Paper style={styles.container} zDepth={1}>
	  <ListItem primaryText={<p>{convertTypeDisplay(orderSortType)}: <TimeDisplay>{props[orderSortType]}</TimeDisplay></p>}
	    secondaryText={
	    	<div>
	      	<p>{`${orderStatus.status} (Total Price: S${totalPrice})`}</p>
	      	<p>Pickup Address: {pickupAddress}</p>
	      </div>
	    }
	    secondaryTextLines={2}/>
  </Paper>
);

OrderListItem.propTypes = {
	orderSortType: PropTypes.string.isRequired
};

const styles = {
	container: {
		margin: '10px 10px'
	}
};

export default OrderListItem;