import React, { PropTypes } from 'react';
import IconPlace from 'material-ui/lib/svg-icons/maps/place';
import IconLocalPhone from 'material-ui/lib/svg-icons/maps/local-phone';
import IconAccessTime from 'material-ui/lib/svg-icons/device/access-time';
import { TimeDisplay, IconParagraph } from '../widgets';

let OrderProfile = ({address, unitNumber, postalCode, contactNo,
	pickupTime, pickupDate, dropOffDate, dropOffTime}) => (
	<div>
    <IconParagraph icon={<IconPlace/>}>
      Address: {`${address}, ${unitNumber}, ${postalCode}`}
    </IconParagraph>
    <IconParagraph icon={<IconLocalPhone/>}>
      Contact: {contactNo}
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
	unitNumber: PropTypes.any,
	postalCode: PropTypes.any,
	contactNo: PropTypes.any,
	pickupTime: PropTypes.string,
	pickupDate: PropTypes.string,
	dropOffDate: PropTypes.string,
	dropOffTime: PropTypes.string
};

export default OrderProfile;