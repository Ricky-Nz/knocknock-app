import React, { PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import ListItem from 'material-ui/lib/lists/list-item';
import IconButton from 'material-ui/lib/icon-button';
import IconModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit';

let AddressListItem = ({id, name, address, unitNumber, contactNo, postalCode, onEditAddress}) => (
	<Paper style={styles.container} zDepth={1}>
	  <ListItem primaryText={<span>{name} ({contactNo})</span>}
	    secondaryText={
	      <p>
	        <span>{address}, {unitNumber}, {postalCode}</span>
	      </p>
	    } secondaryTextLines={2}
	    rightIconButton={<IconButton onClick={() => onEditAddress(null, id)}><IconModeEdit/></IconButton>}/>
  </Paper>
);

AddressListItem.propTypes = {
	onEditAddress: PropTypes.func.isRequired
};

const styles = {
	container: {
		margin: '10px 10px'
	}
};

export default AddressListItem;