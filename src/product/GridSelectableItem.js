import React, { Component, PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import GridItem from './GridItem';

let GridSelectableItem = ({checked, selectProduct, ...props}) => (
	<div className='position-relative' onClick={selectProduct}>
		<GridItem {...props}/>
		<Checkbox style={checkboxStyle} checked={checked}/>
	</div>
)

GridSelectableItem.propTypes = {
	checked: PropTypes.bool,
	selectProduct: PropTypes.func.isRequired
};

GridSelectableItem.defaultProps = {
	checked: false
};

const checkboxStyle = {
	position: 'absolute',
	left: 16,
	bottom: 16
};

export default GridSelectableItem;