import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';

let AddressListItem = ({id, address, unit_number, contact_no, postal_code,
	rightIconButton, onClick}) => (
  <ListItem onClick={onClick} primaryText={<span>Contact: {contact_no}</span>}
    secondaryText={
      <div>
        <p>Address: {address}, {unit_number}</p>
        <p>Postal Code: {postal_code}</p>
      </div>
    } secondaryTextLines={2} rightIconButton={rightIconButton}/>
);

export default AddressListItem;