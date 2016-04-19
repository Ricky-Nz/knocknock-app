import React, { Component, PropTypes } from 'react';
import IconDone from 'material-ui/svg-icons/action/done';
import CircularProgress from 'material-ui/CircularProgress';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { ActionBar, EditText } from '../widgets';

class AddressEditPage extends Component {
	constructor(props) {
		super(props);
		this.onSumbit = this.onSumbit.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.editing&&this.props.editing
			&&nextProps.editSuccess&&!this.props.address) {
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

		this.props.createOrEditAddress({
			postal_code,
			address,
			unit_number,
			contact_no
		});
	}
	render() {
		const { editing, address } = this.props;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title={address?'Edit Address':'New Address'} running={editing}
					onLeftMenuClicked={this.context.router.goBack}
					leftIcon={<IconArrowBack/>} rightIcon={<IconDone/>} onRightMenuClicked={this.onSumbit}/>
				<div className='padding margin-horizontal'>
					<EditText ref='postalCode' fullWidth={true} type='number'
						value={address&&address.postal_code} hintText='Postal Code'
						errorText='please enter a valid postal code, e.g. 418924' verify={/^[0-9]{6,6}$/}/>
					<EditText ref='address' fullWidth={true}
						value={address&&address.address} hintText='Address'
						errorText='address can not be empty' verify={/^(?!\s*$).+/}/>
					<EditText ref='unitNumber' fullWidth={true}
						value={address&&address.unit_number} hintText='Unit Number'/>
					<EditText ref='contactNo' fullWidth={true} type='number'
						value={address&&address.contact_no} hintText='Contact Number'
						errorText='please enter a valid phone number' verify={/^[0-9]{8,8}$/}/>
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
	editSuccess: PropTypes.bool,
	address: PropTypes.object,
	createOrEditAddress: PropTypes.func.isRequired,
	toast: PropTypes.func.isRequired
};

export default AddressEditPage;