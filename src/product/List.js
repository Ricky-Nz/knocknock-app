import React, { Component, PropTypes } from 'react';
import { List as MList } from 'material-ui/List';
import ListItem from './ListItem';
import ProductDialog from './ProductDialog';

let List = ({items, showProduct}) => (
	<div>
		<MList>
			{items&&
				items.map((item, index) =>
					<ListItem key={idnex} {...item} onClick={showProduct}/>)
			}
		</MList>
		<ProductDialog/>
	</div>
);

List.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object),
	showProduct: PropTypes.func.isRequired,
};

export default List;