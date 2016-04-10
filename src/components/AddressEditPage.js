import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconArrowBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
import IconDone from 'material-ui/lib/svg-icons/action/done';
import TextField from 'material-ui/lib/text-field';

class AddressEditPage extends Component {
	constructor(props) {
		super(props);
		this.onBack = this.onBack.bind(this);
		this.onSumbit = this.onSumbit.bind(this);
		this.onAddressChange = this.onAddressChange.bind(this);
		this.onUnitNumberChange = this.onUnitNumberChange.bind(this);
		this.onPostalCodeChange = this.onPostalCodeChange.bind(this);
		this.onContactNumberChange = this.onContactNumberChange.bind(this);

		if (props.address) {
			this.state = {
				address: props.address.address,
				contactNo: props.address.contactNo,
				postalCode: props.address.postalCode,
				unitNumber: props.address.unitNumber
			};
		} else {
			this.state = {
				address: '',
				contactNo: '',
				postalCode: '',
				unitNumber: ''
			};
		}
	}
	onBack() {
		this.context.router.goBack();
	}
	onSumbit() {
		if (!this.state.address) {
			this.props.toast('Address can not be empty');
			return;
		}

		if (!this.state.postalCode) {
			this.props.toast('Postal code can not be empty');
			return;
		}

		if (!this.state.contactNo) {
			this.props.toast('Contact number can not be empty');
			return;
		}

		this.props.createOrEditAddress(this.state);
	}
	onAddressChange(event) {
		this.setState({address: event.target.value});
	}
	onUnitNumberChange(event) {
		this.setState({unitNumber: event.target.value});
	}
	onPostalCodeChange(event) {
		this.setState({postalCode: event.target.value});
	}
	onContactNumberChange(event) {
		this.setState({contactNo: event.target.value});
	}
	render() {
		const { editing, address: addressObject } = this.props;
		const { address, contactNo, postalCode, unitNumber } = this.state;

		return (
			<div className='fillHeight page'>
			  <AppBar title={addressObject?'Edit Address':'New Address'}
			  	iconElementRight={<IconButton onClick={this.onSumbit}><IconDone/></IconButton>}
			    iconElementLeft={<IconButton onClick={this.onBack}><IconArrowBack/></IconButton>}/>
				<div className='row'>
					<div className='col-xs-10 col-xs-offset-1'>
						<TextField fullWidth={true} value={address} disabled={editing}
								floatingLabelText='Address' onChange={this.onAddressChange}/>
						<TextField fullWidth={true} value={unitNumber} disabled={editing}
								floatingLabelText='Unit Number' onChange={this.onUnitNumberChange}/>
						<TextField fullWidth={true} value={postalCode} disabled={editing}
								floatingLabelText='Postal Code' onChange={this.onPostalCodeChange}/>
						<TextField fullWidth={true} value={contactNo} disabled={editing}
								floatingLabelText='Contact Number' onChange={this.onContactNumberChange}/>
					</div>
				</div>
			</div>
		);
	}
}

AddressEditPage.contextTypes = {
  router: React.PropTypes.object
};

AddressEditPage.propTypes = {
	editing: PropTypes.bool,
	address: PropTypes.object,
	createOrEditAddress: PropTypes.func.isRequired,
	toast: PropTypes.func.isRequired
};

export default AddressEditPage;