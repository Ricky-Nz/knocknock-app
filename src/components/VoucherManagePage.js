import React, { Component, PropTypes } from 'react';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import { VoucherList } from '../containers';
import { ActionBar } from '../widgets';

let AddressManagePage = ({loading, getVouchers, onDrawerClick}) => (
	<div className='flex flex-fill'>
		<ActionBar title='My Vouchers' running={loading}
			leftMenu={true} onLeftMenuClicked={onDrawerClick}
			rightIcon={<IconRefresh/>} onRightMenuClicked={getVouchers}/>
		<div className='flex flex-fill position-relative'>
			<VoucherList/>
		</div>
	</div>
);

AddressManagePage.contextTypes = {
  router: React.PropTypes.object
};

AddressManagePage.propTypes = {
	loading: PropTypes.bool,
	getVouchers: PropTypes.func.isRequired,
	onDrawerClick: PropTypes.func.isRequired
};

export default AddressManagePage;

