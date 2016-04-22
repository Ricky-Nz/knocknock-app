import React, { Component, PropTypes } from 'react';
import { Page, EmptyView, AddButton } from '../app_widgets';
import RefreshMenuContainer from './RefreshMenuContainer';
import DeleteDialogContainer from './DeleteDialogContainer';
import List from './List';

class ManagePage extends Component {
	onCreateAddress = () => {
		this.context.router.push('/address');
	}
	onEditAddress = (address) => {
		this.context.router.push(`/address/${address.id}`);
	}
	render() {
		return (
			<Page title='Manage Address'
				navCallback={this.props.location.query.navCallback}
				rightMenu={<RefreshMenuContainer/>}>
				<List paper={true} onItemClicked={this.onEditAddress}
					onDeleteItem={this.props.preDeleteAddress} emptyView={<EmptyView text='no addresses, click the + button below to add one'/>}/>
		    <AddButton style={styles.floatBtn} onClick={this.onCreateAddress}/>
		    <DeleteDialogContainer/>
			</Page>
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

