import React, { Component, PropTypes } from 'react';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import Subheader from 'material-ui/Subheader';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import { ListItem } from 'material-ui/List';
import { AddressSelectDialog } from '../containers';
import PickupTimeChooser from './PickupTimeChooser';
import { ActionBar } from '../widgets';

class SettingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {dialogShow: false, timeChooserShow: false};
		this.toggleDialog = this.toggleDialog.bind(this);
		this.onSelectAddress = this.onSelectAddress.bind(this);
		this.onSelectPickupTime = this.onSelectPickupTime.bind(this);
		this.togglePickupTimeChooser = this.togglePickupTimeChooser.bind(this);
		this.onNoteChange = this.onNoteChange.bind(this);
		this.onAddNewAddress = this.onAddNewAddress.bind(this);
	}
	toggleDialog() {
		if (1 === 2) {

		}
		this.setState({dialogShow: !this.state.dialogShow});
	}
	onSelectAddress(address) {
		this.toggleDialog();
		this.props.setDefaultAddress(address);
	}
  onSelectPickupTime(time) {
    this.props.setDefaultPickupTime(time);
    this.togglePickupTimeChooser();
  }
  togglePickupTimeChooser() {
  	this.setState({timeChooserShow: !this.state.timeChooserShow});
  }
  onNoteChange(event) {
  	this.props.setDefaultNote(event.target.value);
  }
  onAddNewAddress() {
  	this.toggleDialog();
  	this.context.router.push('/address');
  }
	render() {
		const {onMenuClick, address, pickupTime, note} = this.props;

		return (
			<div className='flex flex-fill'>
				<ActionBar title='Settings' leftIcon={this.props.onMenuClick?<IconMenu/>:<IconArrowBack/>}
					onLeftMenuClicked={onMenuClick||this.context.router.goBack}/>
				<div className='flex flex-fill position-relative'>
					<div className='scroll padding'>
						<Subheader>Default pickup address</Subheader>
			      <ListItem rightIcon={<IconEdit/>} onClick={this.toggleDialog}
			        primaryText={address?`${address.address}, ${address.postal_code}`:'not set'}/>
						<Subheader>Default pickup time</Subheader>
						<ListItem rightIcon={<IconEdit/>} onClick={this.togglePickupTimeChooser}
			        primaryText={pickupTime?pickupTime:'not set'}/>
						<Subheader>Default order note</Subheader>
						<div className='padding-horizontal'>
							<TextField fullWidth={true} hintText='write default note here'
								value={note||''} onChange={this.onNoteChange}/>
						</div>
						<PickupTimeChooser open={this.state.timeChooserShow} select={pickupTime}
							onSelect={this.onSelectPickupTime} onCancel={this.togglePickupTimeChooser}/>
						<AddressSelectDialog open={this.state.dialogShow} defaultAddress={address}
							onSelect={this.onSelectAddress} onCancel={this.toggleDialog}
							onAddNewAddress={this.onAddNewAddress}/>
						<br/><br/><br/>
					</div>
				</div>
			</div>
		);
	}
}

SettingPage.propTypes = {
	address: PropTypes.any,
	pickupTime: PropTypes.any,
	note: PropTypes.string,
	setDefaultAddress: PropTypes.func.isRequired,
	setDefaultPickupTime: PropTypes.func.isRequired,
	setDefaultNote: PropTypes.func.isRequired,
	onMenuClick: PropTypes.func
};

SettingPage.contextTypes = {
  router: React.PropTypes.object
};

export default SettingPage;