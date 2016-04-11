import React, { PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import ListItem from 'material-ui/lib/lists/list-item';

let AddressListItem = ({id, address, unitNumber, contactNo, postalCode,
	rightIconButton, onClick}) => (
	<Paper style={styles.container} zDepth={1}>
	  <ListItem onClick={onClick} primaryText={<span>Contact: {contactNo}</span>}
	    secondaryText={
	      <div>
	        <p>Address: {address}, {unitNumber}</p>
	        <p>Postal Code: {postalCode}</p>
	      </div>
	    } secondaryTextLines={2} rightIconButton={rightIconButton}/>
  </Paper>
);

const styles = {
	container: {
		margin: '10px'
	}
};

export default AddressListItem;