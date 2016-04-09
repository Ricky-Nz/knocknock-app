import React from 'react';
import MessageToastContainer from '../containers/MessageToastContainer';

const Application = ({children}) => (
	<div className='fillHeight'>
		{children}
		<MessageToastContainer/>
	</div>
);

export default Application;