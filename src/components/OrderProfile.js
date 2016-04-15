import React, { PropTypes } from 'react';
import IconPlace from 'material-ui/svg-icons/maps/place';
import IconLocalPhone from 'material-ui/svg-icons/maps/local-phone';
import IconAccessTime from 'material-ui/svg-icons/device/access-time';
import { TimeDisplay, IconParagraph } from '../widgets';
import { ListItem } from 'material-ui/List';

let OrderProfile = ({address, unit_number, postal_code, contact_no,
	pickupTime, pickupDate, dropOffDate, dropOffTime}) => (
	<div>
    <ListItem primaryText={`${address}, ${unit_number}, ${postal_code}`}
      leftIcon={<IconPlace/>}/>
    {contact_no&&
	    <ListItem primaryText={contact_no}
	      leftIcon={<IconLocalPhone/>}/>
    }
    <ListItem primaryText={<p>Pickup time: <TimeDisplay format='LT'>{pickupTime}</TimeDisplay>, <TimeDisplay format='MMMM Do YYYY'>{pickupDate}</TimeDisplay></p>}
      leftIcon={<IconAccessTime/>}/>
    {dropOffDate&&
      <ListItem primaryText={`Drop off time: <TimeDisplay format='LT'>{dropOffTime}</TimeDisplay>}, <TimeDisplay format='MMMM Do YYYY'>{dropOffDate}</TimeDisplay>`}
        leftIcon={<IconAccessTime/>}/>
    }
	</div>
);

OrderProfile.propTypes = {
	address: PropTypes.string,
	unit_number: PropTypes.any,
	postal_code: PropTypes.any,
	contact_no: PropTypes.any,
	pickupTime: PropTypes.any,
	pickupDate: PropTypes.any,
	dropOffDate: PropTypes.any,
	dropOffTime: PropTypes.any
};

export default OrderProfile;