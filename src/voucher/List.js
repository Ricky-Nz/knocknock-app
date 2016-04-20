import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui/List';
import VoucherListItem from './VoucherListItem';
import { LoadingProgress } from '../widgets';

class VoucherList extends Component {
	componentDidMount() {
		!this.props.loading&&this.props.getVouchers();
	}
	render() {
		const { loading, vouchers } = this.props;
		
		return (
			<List style={styles.container}>
				{(loading&&!vouchers)?<LoadingProgress/>:
					(vouchers&&vouchers.map((voucher, index) =>
						<VoucherListItem key={index} {...voucher}/>
					))
				}
			</List>
		);
	}
}

VoucherList.propTypes = {
	loading: PropTypes.bool,
	vouchers: PropTypes.array,
	getVouchers: PropTypes.func.isRequired
};

const styles = {
	container: {
		paddingTop: '0px',
		overflow: 'auto'
	}
};

export default VoucherList;