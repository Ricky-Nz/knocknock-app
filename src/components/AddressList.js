import React, { Component, PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import CircularProgress from 'material-ui/lib/circular-progress';
import AddressListItem from './AddressListItem';

class AddressList extends Component {
	componentDidMount() {
		this.props.loadOrders();
	}
	render() {
		const { loading, addresses } = this.props;
		
		return (
			<List className='fillHeight' style={styles.container}>
				{loading?<CircularProgress size={0.8}/>:
					(addresses&&addresses.map((address, index) => (
						<AddressListItem key={index} {...address}/>
					)))
				}
			</List>
		);
	}
}

AddressList.propTypes = {
	loading: PropTypes.bool,
	addresses: PropTypes.array,
	loadUserAddresses: PropTypes.func.isRequired
};

const styles = {
	container: {
		overflow: 'auto'
	}
};

export default AddressList;