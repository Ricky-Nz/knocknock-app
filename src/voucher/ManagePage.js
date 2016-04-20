import React, { Component, PropTypes } from 'react';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { VoucherList } from '../containers';
import { ActionBar } from '../widgets';

let VoucherManagePage = ({loading, getVouchers, onMenuClick, context}) => (
	<div className='flex flex-fill'>
		<ActionBar title='My Vouchers' running={loading}
			leftIcon={onMenuClick?<IconMenu/>:<IconArrowBack/>} onLeftMenuClicked={onMenuClick||context.router.goBack}
			rightIcon={<IconRefresh/>} onRightMenuClicked={getVouchers}/>
		<div className='flex flex-fill position-relative'>
			<VoucherList/>
		</div>
	</div>
);

VoucherManagePage.contextTypes = {
  router: React.PropTypes.object
};

VoucherManagePage.propTypes = {
	loading: PropTypes.bool,
	getVouchers: PropTypes.func.isRequired,
	onMenuClick: PropTypes.func
};

export default VoucherManagePage;

