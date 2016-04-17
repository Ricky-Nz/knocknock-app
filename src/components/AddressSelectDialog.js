import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { AddressList } from '../containers';
import { LoadingProgress } from '../widgets';

class AddressSelectDialog extends Component {
	componentWillReceiveProps(nextProps) {
		if (nextProps.open&&!this.props.open&&!nextProps.addresses&&!nextProps.loading) {
			this.props.loadUserAddresses();
		}
	}
	render() {
		const {open, loading, addresses, defaultAddress,
			onSelect, onCancel, onAddNewAddress } = this.props;

		return (
			<Dialog title={loading?'Loading...':(addresses?null:'You havnt set any addresses, add new address now?')}
				actions={(!loading&&!addresses)?[<FlatButton label='Add address' primary={true} onClick={onAddNewAddress}/>]:null}
				contentStyle={styles.container} bodyStyle={styles.bodyStyle}
				open={open} modal={false} onRequestClose={onCancel}>
				{loading?<LoadingProgress/>:
					(addresses&&
						<AddressList selectable={true} selectItem={defaultAddress}
							onItemClicked={onSelect}/>
					)
				}
			</Dialog>
		);
	}
}

AddressSelectDialog.propTypes = {
	defaultAddress: PropTypes.object,
	open: PropTypes.bool,
	onSelect: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired,
	onAddNewAddress: PropTypes.func.isRequired,
	addresses: PropTypes.array,
	loading: PropTypes.bool,
	loadUserAddresses: PropTypes.func.isRequired
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