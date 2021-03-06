import React, { Component, PropTypes } from 'react';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import { ListItem } from 'material-ui/List';
import { Page, RangeTimeChooser } from '../app_widgets';
import { AddressSelectDialog } from '../address';

class SettingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
	}
	toggleDialog = () => {
		this.setState({open: !this.state.open});
	}
	onSelectAddress = (address) => {
		this.toggleDialog();
		this.props.recordDefaultAddress(address);
	}
  onSelectPickupTime = (time) => {
    this.props.recordDefaultPickupTime(time);
  }
  onNoteChange = (event) => {
  	this.props.recordDefaultNote(event.target.value);
  }
  onAddNewAddress = () => {
  	this.toggleDialog();
  	this.context.router.push('/address');
  }
	render() {
		const {defaultAddress, defaultPickupTime, defaultNote} = this.props;

		return (
			<Page title='Settings'
				navCallback={this.props.location.query.navCallback}>
				<div className='flex flex-fill scroll padding'>
					<Subheader>Default pickup address</Subheader>
		      <ListItem rightIcon={<IconEdit/>} onClick={this.toggleDialog}
		        primaryText={defaultAddress?`${defaultAddress.address}, ${defaultAddress.postal_code}`:'not set'}/>
					<Subheader>Default pickup time</Subheader>
					<RangeTimeChooser time={defaultPickupTime} onTimeChange={this.onSelectPickupTime}/>
					<Subheader>Default order note</Subheader>
					<div className='padding-horizontal'>
						<TextField fullWidth={true} hintText='write default note here'
							value={defaultNote||''} onChange={this.onNoteChange}/>
					</div>
					<AddressSelectDialog open={this.state.open} defaultAddress={defaultAddress}
						onSelect={this.onSelectAddress} onCancel={this.toggleDialog}
						onAddNewAddress={this.onAddNewAddress}/>
					<br/><br/><br/>
				</div>
			</Page>
		);
	}
}

SettingPage.propTypes = {
	defaultAddress: PropTypes.any,
	defaultPickupTime: PropTypes.any,
	defaultNote: PropTypes.string,
	recordDefaultAddress: PropTypes.func.isRequired,
	recordDefaultPickupTime: PropTypes.func.isRequired,
	recordDefaultNote: PropTypes.func.isRequired
};

SettingPage.contextTypes = {
  router: React.PropTypes.object
};

export default SettingPage;