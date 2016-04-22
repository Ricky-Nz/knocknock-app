import React from 'react';
import { COLOR_GRAY } from './';

const NoteText = ({children}) => (
	<p className='text-center font-sm' style={style}>{children}</p>
);

const style = {
	color: COLOR_GRAY
};

export default NoteText;