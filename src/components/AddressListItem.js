import React, { Proptypes } from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

let AddressListItem = ({name, address}) => (
  <ListItem primaryText={name}
    secondaryText={
      <p>
        <span>{address}</span> --
        I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
      </p>
    }
    secondaryTextLines={2}/>
);

export default AddressListItem;