import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import IconDone from 'material-ui/svg-icons/action/done';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import { ActionBar, EditText } from '../widgets';

class CreateEditPage extends Component {
	constructor(props) {
		super(props);
		this.onSumbit = this.onSumbit.bind(this);
	}
	componentDidMount() {
		const { processing, params, getAddress } = this.props;
		!processing&&params&&params.addressId&&getAddress(params.addressId);
	}
	componentWillReceiveProps(nextProps) {
		// close page after successful create a address
		if ((!this.props.params||!this.props.params.addressId)&&!nextProps.processing&&this.props.processing
			&&nextProps.processSuccess) {
			this.context.router.goBack();
		}
	}
	onSumbit() {
		const postal_code = this.refs.postalCode.getValidValue();
		const address = this.refs.address.getValidValue();
		const unit_number = this.refs.unitNumber.getValidValue();
		const contact_no = this.refs.contactNo.getValidValue();

		if (postal_code === null || address === null
			|| unit_number === null || contact_no === null) {
			return;
		}

		if (this.props.params.addressId) {
			this.props.updateAddress({
				id: this.props.params.addressId,
				postal_code,
				address,
				unit_number,
				contact_no
			});
		} else {
			this.props.createAddress({
				postal_code,
				address,
				unit_number,
				contact_no
			});
		}
	}
	render() {
		const editing = this.props.params&&this.props.params.addressId;
		const { processing, address } = this.props;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title={editing?'Edit Address':'New Address'}
					leftMenu={<IconButton onClick={this.context.router.goBack}><IconBack/></IconButton>}
					rightMenu={<IconButton onClick={this.onSumbit}><IconDone/></IconButton>}/>
				<div className='padding margin-horizontal'>
					<EditText ref='postalCode' fullWidth={true} type='number'
						value={address&&address.postal_code} hintText='Postal Code'
						errorText='please enter a valid postal code, e.g. 418924' verify='postalcode'/>
					<EditText ref='address' fullWidth={true}
						value={address&&address.address} hintText='Address'
						errorText='address can not be empty' verify='notempty'/>
					<EditText ref='unitNumber' fullWidth={true}
						value={address&&address.unit_number} hintText='Unit Number'/>
					<EditText ref='contactNo' fullWidth={true} type='number'
						value={address&&address.contact_no} hintText='Contact Number'
						errorText='please enter a valid phone number' verify='phonenumber'/>
				</div>
			</div>
		);
	}
}

CreateEditPage.contextTypes = {
  router: React.PropTypes.object
};

CreateEditPage.propTypes = {
	processing: PropTypes.bool,
	processSuccess: PropTypes.bool,
	address: PropTypes.object,
	createAddress: PropTypes.func.isRequired,
	updateAddress: PropTypes.func.isRequired,
	getAddress: PropTypes.func.isRequired
};

export default CreateEditPage;