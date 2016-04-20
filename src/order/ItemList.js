import React, { Component, PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ProductInfoDialog from './ProductInfoDialog';

class OrderItemList extends Component {
	render() {
		const { items } = this.props;
		return (
			<div>
				<List style={styles.container}>
					{items&&
						items.map(({quantity, price, laundry_type, item}, index) => (
							<ListItem key={index} onClick={() => this.refs.dialog.show(item)}
								primaryText={`${item.name_en} x ${quantity}`}
								secondaryText={
									<div>
										<p>Laundry type: {laundry_type}</p>
										<p>Price: S${price}</p>
									</div>
								}
								secondaryTextLines={2}
								rightAvatar={<Avatar style={styles.avatar} src={item.image_url}/>}/>
						))
					}
				</List>
				<ProductInfoDialog ref='dialog'/>
			</div>
		);
	}
}

OrderItemList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object)
};

const styles = {
	container: {
		paddingTop: '0px'
	},
	avatar: {
		borderRadius: 0
	}
};

export default OrderItemList;