import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import Subheader from 'material-ui/Subheader';
import { ListItem } from 'material-ui/List';
import AddressSelectDialog from './AddressSelectDialog';

class SettingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {dialogShow: false};
		this.toggleDialog = this.toggleDialog.bind(this);
		this.onSelectAddress = this.onSelectAddress.bind(this);
	}
	toggleDialog() {
		this.setState({dialogShow: !this.state.dialogShow});
	}
	onSelectAddress(address) {
		this.toggleDialog();
	}
	render() {
		const {onDrawerClick, address, time, note} = this.props;

		return (
			<div className='flex flex-fill'>
				<AppBar title='Settings'
					iconElementLeft={<IconButton onClick={onDrawerClick}><IconMenu/></IconButton>}/>
				<div className='padding'>
					<Subheader>Default pickup address</Subheader>
		      <ListItem rightIcon={<IconEdit/>} onClick={this.toggleDialog}
		        primaryText={address?address.address:'not set'}/>
					<Subheader>Default pickup time</Subheader>
					<ListItem rightIcon={<IconEdit/>}
		        primaryText={time?time:'not set'}/>
					<Subheader>Default new order note</Subheader>
					<AddressSelectDialog open={this.state.dialogShow} defaultAddress={address}
						onSelect={this.onSelectAddress} onClose={this.toggleDialog}/>
				</div>
			</div>
		);
	}
}

export default SettingPage;