import React, { Component, PropTypes } from 'react';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import { AddressList } from '../containers';
import { ActionBar } from '../widgets';

class AddressManagePage extends Component {
	constructor(props) {
		super(props);
		this.onCreateOrEditAddress = this.onCreateOrEditAddress.bind(this);
	}
	onCreateOrEditAddress(address) {
		this.context.router.push(address.id?`address/${address.id}`:'address');
	}
	render() {
		return (
			<div className='flex flex-fill'>
				<ActionBar title='Manage Address' running={this.props.loading}
					leftIcon={this.props.onMenuClick?<IconMenu/>:<IconArrowBack/>}
					onLeftMenuClicked={this.props.onMenuClick||this.context.router.goBack}
					rightIcon={<IconRefresh/>} onRightMenuClicked={this.props.loadUserAddresses}/>
				<div className='flex flex-fill position-relative'>
					<AddressList paper={true} onItemClicked={this.onCreateOrEditAddress}/>
			    <FloatingActionButton style={styles.floatBtn} onClick={this.onCreateOrEditAddress}>
			      <ContentAdd/>
			    </FloatingActionButton>
				</div>
			</div>
		);
	}
}

AddressManagePage.contextTypes = {
  router: React.PropTypes.object
};

AddressManagePage.propTypes = {
	loading: PropTypes.bool,
	loadUserAddresses: PropTypes.func,
	onMenuClick: PropTypes.func
};

const styles = {
	floatBtn: {
		position: 'absolute',
		right: 25,
		bottom: 25
	}
};

export default AddressManagePage;

