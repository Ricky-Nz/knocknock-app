import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { SearchMenu } from '../widgets';
import MenuItem from 'material-ui/lib/menus/menu-item';

const dataSelector = state => state.products;

const mapStateToProps = createSelector(
	dataSelector,
	(products) => ({
		dataSource: products?products.map(({name_en, iron_price}) => ({
			text: name_en,
			value: (
	      <MenuItem primaryText={name_en}
	        secondaryText={`Price: S$${iron_price}`}/>
      )
		})):[]
	})
);

export default connect(mapStateToProps)(SearchMenu);