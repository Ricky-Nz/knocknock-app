import React, { PropTypes } from 'react';

let IconParagraph = ({icon, children}) => (
	<div style={styles.container}>
		{icon}<p style={styles.textContainer}>{children}</p>
	</div>
);

IconParagraph.propTypes = {
	icon: PropTypes.element
};

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'row',
		padding: '8px 0px'
	},
	textContainer: {
		flex: '1',
		paddingTop: '2px',
		paddingLeft: '8px'
	}
};

export default IconParagraph;