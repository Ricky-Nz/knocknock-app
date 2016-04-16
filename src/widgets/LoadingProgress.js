import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

let LoadingProgress = ({size, label}) => (
	<div className='flex flex-row flex-center flex-align-center' style={style}>
		<CircularProgress size={size}/>
		{label}
	</div>
);

LoadingProgress.propTypes = {
	size: PropTypes.number
};

LoadingProgress.defaultProps = {
	size: 0.7
};

const style = {
	padding: '16px'
};

export default LoadingProgress;