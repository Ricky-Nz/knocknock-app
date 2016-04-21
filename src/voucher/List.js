import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui/List';
import ListItem from './ListItem';
import { LoadingProgress } from '../widgets';

class VoucherList extends Component {
	componentDidMount() {
		!this.props.processing&&this.props.listVouchers();
	}
	render() {
		const { processing, vouchers } = this.props;
		
		return (
			<List className='scroll'>
				{(processing&&!vouchers)?<LoadingProgress/>:
					(vouchers&&vouchers.map((voucher, index) =>
						<ListItem key={index} {...voucher}/>
					))
				}
			</List>
		);
	}
}

VoucherList.propTypes = {
	processing: PropTypes.bool,
	vouchers: PropTypes.array,
	listVouchers: PropTypes.func.isRequired
};

export default VoucherList;