import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import { AddressList } from '../containers';

class AddressManagePage extends Component {
	constructor(props) {
		super(props);
		this.onCreateOrEditAddress = this.onCreateOrEditAddress.bind(this);
		this.onRefresh = this.onRefresh.bind(this);
	}
	onCreateOrEditAddress(address) {
		this.context.router.push(address.id?`address/${address.id}`:'address');
	}
	onRefresh() {
		this.props.loadUserAddresses();
	}
	render() {
		return (
			<div className='flex flex-fill'>
				<AppBar title='Manage Address'
					iconElementLeft={<IconButton onClick={this.props.onDrawerClick}><IconMenu/></IconButton>}
					iconElementRight={this.props.loading?<CircularProgress size={0.5} color='white'/>:
						<IconButton onClick={this.onRefresh}><IconRefresh/></IconButton>}/>
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
	onDrawerClick: PropTypes.func.isRequired
};

const styles = {
	floatBtn: {
		position: 'absolute',
		right: 25,
		bottom: 25
	}
};

export default AddressManagePage;

