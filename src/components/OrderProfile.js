import React, { PropTypes } from 'react';
import IconPlace from 'material-ui/lib/svg-icons/maps/place';
import IconLocalPhone from 'material-ui/lib/svg-icons/maps/local-phone';
import IconAccessTime from 'material-ui/lib/svg-icons/device/access-time';
import { TimeDisplay, IconParagraph } from '../widgets';

let OrderProfile = ({address, unit_number, postal_code, contact_no,
	pickupTime, pickupDate, dropOffDate, dropOffTime}) => (
	<div>
    <IconParagraph icon={<IconPlace/>}>
      Address: {`${address}, ${unit_number}, ${postal_code}`}
    </IconParagraph>
    <IconParagraph icon={<IconLocalPhone/>}>
      Contact: {contact_no}
    </IconParagraph>
    <IconParagraph icon={<IconAccessTime/>}>
      Pickup time: <TimeDisplay format='LT'>{pickupTime}</TimeDisplay>, <TimeDisplay format='MMMM Do YYYY'>{pickupDate}</TimeDisplay>
    </IconParagraph>
    {dropOffDate&&
      <IconParagraph icon={<IconAccessTime/>}>
        Drop off time: <TimeDisplay format='LT'>{dropOffTime}</TimeDisplay>}, <TimeDisplay format='MMMM Do YYYY'>{dropOffDate}</TimeDisplay>
      </IconParagraph>
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