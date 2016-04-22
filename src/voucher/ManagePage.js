import React, { Component, PropTypes } from 'react';
import { Page } from '../app_widgets';
import RefreshMenuContainer from './RefreshMenuContainer';

class ManagePage extends Component {
	render() {
		return (
			<Page title='My Vouchers'
				navCallback={this.props.location.query.navCallback}
				rightMenu={<RefreshMenuContainer/>}>
				<VoucherList/>
			</Page>
		);
	}
}

ManagePage.contextTypes = {
  router: React.PropTypes.object
};

export default ManagePage;

