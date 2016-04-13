import React, { PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import ListItem from 'material-ui/lib/lists/list-item';
import Subheader from 'material-ui/lib/Subheader';
import { TimeDisplay } from '../widgets';

function convertTypeDisplay(orderSortType) {
	switch(orderSortType) {
		case 'pickup_date': return 'Pickup date';
		case 'drop_off_date': return 'Drop off date';
		case 'created_on': return 'Create date';
	}
}

let OrderListItem = ({orderSortType, pickup_address, to_pay_price, status, onClick, ...props}) => (
	<Paper style={styles.container} zDepth={1}>
	  <ListItem onClick={onClick} primaryText={<p>{convertTypeDisplay(orderSortType)}: <TimeDisplay>{props[orderSortType]}</TimeDisplay></p>}
	    secondaryText={
	    	<div>
	      	<p>{`${status} (Total Price: S${to_pay_price})`}</p>
	      	<p>Pickup Address: {pickup_address}</p>
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