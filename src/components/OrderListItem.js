import React, { Proptypes } from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

let OrderListItem = ({pickupAddress, pickupDate}) => (
  <ListItem primaryText={pickupAddress}
    secondaryText={
      <p>
        <span>{pickupDate}</span> --
        I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
      </p>
    }
    secondaryTextLines={2}/>
);

export default OrderListItem;