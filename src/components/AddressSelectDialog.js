import React, { PropTypes } from 'react';
import Dialog from 'material-ui/lib/dialog';
import { AddressList } from '../containers';

let AddressSelectDialog = ({open, defaultAddress, onSelect, onClose}) => (
	<Dialog open={open} bodyStyle={styles.container}>
		<AddressList selectable={true} selectItem={defaultAddress}
			onItemClicked={onSelect} onRequestClose={onClose}/>
	</Dialog>
);

AddressSelectDialog.propTypes = {
	defaultAddress: PropTypes.object,
	open: PropTypes.bool,
	onSelect: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired
};

AddressSelectDialog.defaultProps = {
	open: false
};

const styles = {
	container: {
		padding: 0,
		height: 400
	}
};

export default AddressSelectDialog;