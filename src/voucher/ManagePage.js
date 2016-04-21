import React, { Component, PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import { ActionBar } from '../app_widgets';
import RefreshMenuContainer from './RefreshMenuContainer';

class ManagePage extends Component {
	render() {
		const { navCallback } = this.props.location.query;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title='My Vouchers'
					leftMenu={<IconButton onClick={navCallback?this.props[navCallback]:this.context.router.goBack}>{navCallback?<IconMenu/>:<IconBack/>}</IconButton>}
					rightMenu={<RefreshMenuContainer/>}/>
				<div className='flex flex-fill position-relative'>
					<VoucherList/>
				</div>
			</div>
		);
	}
}

ManagePage.contextTypes = {
  router: React.PropTypes.object
};

export default ManagePage;

