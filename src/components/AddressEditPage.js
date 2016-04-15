import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconDone from 'material-ui/svg-icons/action/done';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

class AddressEditPage extends Component {
	constructor(props) {
		super(props);
		this.onBack = this.onBack.bind(this);
		this.onSumbit = this.onSumbit.bind(this);
		this.onUnitNumberChange = this.onUnitNumberChange.bind(this);
		this.onPostalCodeChange = this.onPostalCodeChange.bind(this);
		this.onContactNumberChange = this.onContactNumberChange.bind(this);

		if (props.address) {
			this.state = {
				contact_no: props.address.contact_no,
				postal_code: props.address.postal_code,
				unit_number: props.address.unit_number
			};
		} else {
			this.state = {
				contact_no: '',
				postal_code: '',
				unit_number: ''
			};
		}
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.editing&&this.props.editing
			&&nextProps.editSuccess&&!this.props.address) {
			this.onBack();
		}
	}
	onBack() {
		this.context.router.goBack();
	}
	onSumbit() {
		if (!this.state.postal_code) {
			this.props.toast('Postal code can not be empty');
			return;
		}

		if (!this.state.contact_no) {
			this.props.toast('Contact number can not be empty');
			return;
		}

		this.props.createOrEditAddress(this.state);
	}
	onUnitNumberChange(event) {
		this.setState({unit_number: event.target.value});
	}
	onPostalCodeChange(event) {
		this.setState({postal_code: event.target.value});
	}
	onContactNumberChange(event) {
		this.setState({contact_no: event.target.value});
	}
	render() {
		const { editing, address } = this.props;
		const { contact_no, postal_code, unit_number } = this.state;

		return (
			<div className='flex flex-fill page'>
			  <AppBar title={address?'Edit Address':'New Address'}
			  	iconElementRight={this.props.editing?<CircularProgress size={0.5} color='white'/>:
			  		<IconButton onClick={this.onSumbit}><IconDone/></IconButton>}
			    iconElementLeft={<IconButton onClick={this.onBack}><IconArrowBack/></IconButton>}/>
				<div className='padding margin-horizontal'>
					<TextField fullWidth={true} type='number' value={postal_code}
							floatingLabelText='Postal Code' onChange={this.onPostalCodeChange}/>
					<TextField fullWidth={true} value={unit_number}
							floatingLabelText='Unit Number' onChange={this.onUnitNumberChange}/>
					<TextField fullWidth={true} type='number' value={contact_no}
							floatingLabelText='Contact Number' onChange={this.onContactNumberChange}/>
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