import React, { PropTypes } from 'react';
import { ListItem as MListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

let ListItem = ({item, laundry_type, price, quantity, onClick}) => (
	<MListItem onClick={onClick}
		primaryText={`${item.name_en} x ${quantity}`}
		secondaryText={
			<div>
				<p>Laundry type: {laundry_type}</p>
				<p>Price: S${price}</p>
			</div>
		} secondaryTextLines={2}
		rightAvatar={<Avatar style={styles.avatar} src={item.image_url}/>}/>
);

ListItem.propTypes = {
	item: PropTypes.object.isRequired,
	laundry_type: PropTypes.string,
	price: PropTypes.any,
	quantity: PropTypes.any
};

const styles = {
	avatar: {
		borderRadius: 0
	}
};

export default ListItem;