import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import { ActionBar, EmptyView, AddButton } from '../app_widgets';
import RefreshMenuContainer from './RefreshMenuContainer';
import DeleteDialogContainer from './DeleteDialogContainer';
import List from './List';

class ManagePage extends Component {
	constructor(props) {
		super(props);
		this.onCreateAddress = this.onCreateAddress.bind(this);
		this.onEditAddress = this.onEditAddress.bind(this);
	}
	onCreateAddress() {
		this.context.router.push('/address');
	}
	onEditAddress(address) {
		this.context.router.push(`/address/${address.id}`);
	}
	render() {
		return (
			<div className='flex flex-fill'>
				<ActionBar title='Manage Address'
					leftMenu={<IconButton onClick={this.context.router.goBack}><IconMenu/></IconButton>}
					rightMenu={<RefreshMenuContainer/>}/>
				<div className='flex flex-fill position-relative'>
					<List paper={true} onItemClicked={this.onEditAddress}
						onDeleteItem={this.props.preDeleteAddress} emptyView={<EmptyView text='no addresses, click the + button below to add one'/>}/>
			    <AddButton style={styles.floatBtn} onClick={this.onCreateAddress}/>
			    <DeleteDialogContainer/>
				</div>
			</div>
		);
	}
}

ManagePage.contextTypes = {
  router: React.PropTypes.object
};

ManagePage.propTypes = {
	preDeleteAddress: PropTypes.func.isRequired
};

const styles = {
	floatBtn: {
		position: 'absolute',
		right: 25,
		bottom: 25
	}
};

export default ManagePage;

