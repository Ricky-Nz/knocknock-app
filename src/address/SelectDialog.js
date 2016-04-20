import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import List from './List';

let SelectDialog = ({processing, addresses, open, select,
			onSelect, onCancel, onAddNewAddress}) => (
	<Dialog title={processing?'Loading...':(addresses?null:'You havnt set any addresses, add new address now?')}
		actions={(!processing&&!addresses)?[<FlatButton label='Add address' primary={true} onClick={onAddNewAddress}/>]:null}
		contentStyle={styles.container} bodyStyle={styles.bodyStyle} open={open} modal={false} onRequestClose={onCancel}>
		<List selectable={true} selectItem={select}
			onItemClicked={onSelect}/>
	</Dialog>
)

SelectDialog.propTypes = {
	open: PropTypes.bool,
	select: PropTypes.object,
	onSelect: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	onAddNewAddress: PropTypes.func.isRequired,
	addresses: PropTypes.arrayOf(PropTypes.object),
	processing: PropTypes.bool
};

SelectDialog.defaultProps = {
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

export default SelectDialog;