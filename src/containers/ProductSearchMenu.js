import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { SearchMenu } from '../widgets';
import MenuItem from 'material-ui/lib/menus/menu-item';

const dataSelector = state => state.products;

const mapStateToProps = createSelector(
	dataSelector,
	(products) => ({
		dataSource: products?products.map(item => ({
			text: `${item.nameEn} ${item.nameCn}`,
			value: (
	      <MenuItem primaryText={`${item.nameEn}`}
	        secondaryText={`Price: S$${item.ironPrice}`}/>
      )
		})):[]
	})
);

export default connect(mapStateToProps)(SearchMenu);