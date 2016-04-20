import React, { PropTypes } from 'react';
import moment from 'moment';

let TimeDisplay = ({children, format}) => (
	<span>{format?moment(children).format(format):moment(children).calendar()}</span>
);

TimeDisplay.propTypes = {
	format: PropTypes.string
};

export default TimeDisplay;