import React, { Component, PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import CircularProgress from 'material-ui/lib/circular-progress';
import AddressListItem from './AddressListItem';

class AddressList extends Component {
	componentDidMount() {
		this.props.loadUserAddresses();
	}
	render() {
		const { loading, addresses, onEditAddress } = this.props;
		
		return (
			<List className='fillHeight' style={styles.container}>
				{loading?<CircularProgress size={0.8}/>:
					(addresses&&addresses.map((address, index) => (
						<AddressListItem key={index} {...address} onEditAddress={onEditAddress}/>
					)))
				}
			</List>
		);
	}
}

AddressList.propTypes = {
	loading: PropTypes.bool,
	addresses: PropTypes.array,
	loadUserAddresses: PropTypes.func.isRequired,
	onEditAddress: PropTypes.func.isRequired
};

const styles = {
	container: {
		paddingTop: '0px',
		overflow: 'auto'
	}
};

export default AddressList;