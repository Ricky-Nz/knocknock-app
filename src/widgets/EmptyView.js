import React, { PropTypes } from 'react';
import IconEmpty from 'material-ui/svg-icons/content/content-paste';
import { grey400 } from 'material-ui/styles/colors';

let EmptyView = ({text, actionNode}) => (
	<div className='flex flex-align-center padding'>
		{actionNode?actionNode:<IconEmpty style={styles.icon} color={grey400}/>}
		<p className='padding' style={styles.emptyText}>{text}</p>
	</div>
);

EmptyView.propTypes = {
	text: PropTypes.string.isRequired,
	actionNode: PropTypes.node
};

const styles = {
	icon: {
		height: 40,
		width: 40
	},
	emptyText: {
		textAlign: 'center',
		fontSize: '1.1em'
	}
};

export default EmptyView;