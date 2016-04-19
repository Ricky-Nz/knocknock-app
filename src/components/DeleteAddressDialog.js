import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { LoadingProgress } from '../widgets';

class DeleteAddressDialog extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
		this.onRequestClose = this.onRequestClose.bind(this);
		this.onDeleteAddress = this.onDeleteAddress.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.address&&nextProps.address!==this.props.address) {
			this.setState({show: true});
		} else if (!nextProps.deleting&&this.props.deleting&&this.state.show) {
			this.setState({show: false});
		}
	}
	onRequestClose() {
		this.setState({show: false});
	}
	onDeleteAddress() {
		this.props.deleteAddress(this.props.address.id);
	}
	render() {
		const { address, deleting } = this.props;

		return (
      <Dialog title={`Delete address: ${address&&address.address}?`} actions={[
        	<FlatButton label='Cancel' disabled={deleting} onClick={this.onRequestClose}/>,
      		<FlatButton label='Delete' disabled={deleting} primary={true} onClick={this.onDeleteAddress}/>
      	]} modal={false} open={this.state.show} onRequestClose={this.onRequestClose}>
      	{deleting?<LoadingProgress/>:null}
      </Dialog>
		);
	}
}

DeleteAddressDialog.propTypes = {
	address: PropTypes.object,
	deleting: PropTypes.bool,
	deleteAddress: PropTypes.func.isRequired
};

export default DeleteAddressDialog;