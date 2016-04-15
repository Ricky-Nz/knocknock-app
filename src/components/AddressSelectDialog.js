import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import { AddressList } from '../containers';

let AddressSelectDialog = ({open, defaultAddress, onSelect, onCancel}) => (
	<Dialog contentStyle={styles.container} bodyStyle={styles.bodyStyle} open={open}>
		<AddressList selectable={true} selectItem={defaultAddress}
			onItemClicked={onSelect} onRequestClose={onCancel}/>
	</Dialog>
);

AddressSelectDialog.propTypes = {
	defaultAddress: PropTypes.object,
	open: PropTypes.bool,
	onSelect: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired
};

AddressSelectDialog.defaultProps = {
	open: false
};

const styles = {
	bodyStyle: {
		padding: 0
	},
	container: {
		height: 500,
		overflow: 'auto'
	}
};

export default AddressSelectDialog;