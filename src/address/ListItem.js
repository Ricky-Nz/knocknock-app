import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';

let AddressListItem = ({id, address, unit_number, contact_no, postal_code,
	rightIconButton, onTouchTap}) => (
  <ListItem onTouchTap={onTouchTap} primaryText={`Contact: ${contact_no}`}
    secondaryText={
      <div>
        <p>Address: {`${address}${unit_number?(', ' + unit_number):''}`}</p>
        <p>Postal Code: {postal_code}</p>
      </div>
    } secondaryTextLines={2} rightIconButton={rightIconButton}/>
);

AddressListItem.propTypes = {
	id: PropTypes.any.isRequired,
	address: PropTypes.string,
	unit_number: PropTypes.string,
	contact_no: PropTypes.string,
	postal_code: PropTypes.any
};

export default AddressListItem;