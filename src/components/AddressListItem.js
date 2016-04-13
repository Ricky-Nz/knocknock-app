import React, { PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import ListItem from 'material-ui/lib/lists/list-item';

let AddressListItem = ({id, address, unit_number, contact_no, postal_code,
	rightIconButton, onClick}) => (
	<Paper className='margin' zDepth={1}>
	  <ListItem onClick={onClick} primaryText={<span>Contact: {contact_no}</span>}
	    secondaryText={
	      <div>
	        <p>Address: {address}, {unit_number}</p>
	        <p>Postal Code: {postal_code}</p>
	      </div>
	    } secondaryTextLines={2} rightIconButton={rightIconButton}/>
  </Paper>
);

export default AddressListItem;