import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { LoadingProgress } from '../app_widgets';

class DeleteAddressDialog extends Component {
	constructor(props) {
		super(props);
		this.state = { show: false };
		this.onRequestClose = this.onRequestClose.bind(this);
		this.onDeleteAddress = this.onDeleteAddress.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.penndingAddress&&nextProps.penndingAddress!==this.props.penndingAddress) {
			this.setState({show: true});
		} else if (!nextProps.processing&&this.props.processing&&nextProps.processResult) {
			this.setState({show: false});
		}
	}
	onRequestClose() {
		this.setState({show: false});
	}
	onDeleteAddress() {
		this.props.deleteAddress(this.props.penndingAddress.id);
	}
	render() {
		const { address, processing } = this.props;

		return (
      <Dialog title={`Delete address: ${address&&address.address}?`} actions={[
        	<FlatButton label='Cancel' disabled={deleting} onClick={this.onRequestClose}/>,
      		<FlatButton label='Delete' disabled={deleting} primary={true} onClick={this.onDeleteAddress}/>
      	]} modal={false} open={this.state.show} onRequestClose={this.onRequestClose}>
      	{processing?<LoadingProgress/>:null}
      </Dialog>
		);
	}
}

DeleteAddressDialog.propTypes = {
	processing: PropTypes.bool,
	processResult: PropTypes.bool,
	penndingAddress: PropTypes.object,
	deleteAddress: PropTypes.func.isRequired
};

export default DeleteAddressDialog;