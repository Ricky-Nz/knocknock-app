import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import Subheader from 'material-ui/Subheader';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import { ListItem } from 'material-ui/List';
import AddressSelectDialog from './AddressSelectDialog';

class SettingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {dialogShow: false};
		this.toggleDialog = this.toggleDialog.bind(this);
		this.onSelectAddress = this.onSelectAddress.bind(this);
		this.onSelectPickupTime = this.onSelectPickupTime.bind(this);
		this.onNoteChange = this.onNoteChange.bind(this);
	}
	toggleDialog() {
		this.setState({dialogShow: !this.state.dialogShow});
	}
	onSelectAddress(address) {
		this.toggleDialog();
		this.props.setDefaultAddress(address);
	}
  onSelectPickupTime(event, date) {
    this.props.setDefaultPickupTime(date);
  }
  onNoteChange(event) {
  	this.props.setDefaultNote(event.target.value);
  }
	render() {
		const {onDrawerClick, address, pickupTime, note} = this.props;

		return (
			<div className='flex flex-fill'>
				<AppBar title='Settings'
					iconElementLeft={<IconButton onClick={onDrawerClick}><IconMenu/></IconButton>}/>
				<div className='padding'>
					<Subheader>Default pickup address</Subheader>
		      <ListItem rightIcon={<IconEdit/>} onClick={this.toggleDialog}
		        primaryText={address?address.address:'not set'}/>
					<Subheader>Default pickup time</Subheader>
					<div className='padding-left'>
	          <TimePicker format='24hr' hintText='Time: select to set' value={pickupTime}
	            onChange={this.onSelectPickupTime}/>
          </div>
					<Subheader>Default new order note</Subheader>
					<div className='padding-horizontal'>
						<TextField fullWidth={true} hintText='write default note here'
							value={note||''} onChange={this.onNoteChange}/>
					</div>
					<AddressSelectDialog open={this.state.dialogShow} defaultAddress={address}
						onSelect={this.onSelectAddress} onCancel={this.toggleDialog}/>
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
	setDefaultNote: PropTypes.func.isRequired
};

export default SettingPage;