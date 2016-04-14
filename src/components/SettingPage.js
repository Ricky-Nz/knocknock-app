import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/svg-icons/navigation/menu';

let SettingPage = ({onDrawerClick}) => (
	<div className='flex flex-fill'>
		<AppBar title='Settings'
			iconElementLeft={<IconButton onClick={onDrawerClick}><IconMenu/></IconButton>}/>
	</div>
);

export default SettingPage;