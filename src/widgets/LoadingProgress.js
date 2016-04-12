import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';

let LoadingProgress = (props) => (
	<div className='flex flex-center flex-align-center' style={style}>
		<CircularProgress size={0.7}/>
	</div>
);

const style = {
	padding: '16px'
};

export default LoadingProgress;