import React, { Proptypes } from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import IconLocationCity from 'material-ui/lib/svg-icons/social/location-city';
import IconCall from 'material-ui/lib/svg-icons/communication/call';

let AddressListItem = ({name, address, unitNumber, contactNo, postalCode}) => (
  <ListItem primaryText={<span>{name} ({contactNo})</span>}
    secondaryText={
      <p>
        <span>{address}, {unitNumber}, {postalCode}</span>
      </p>
    } secondaryTextLines={2}/>
);

export default AddressListItem;