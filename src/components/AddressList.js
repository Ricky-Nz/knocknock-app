import React, { Component, PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import AddressListItem from './AddressListItem';
import IconButton from 'material-ui/lib/icon-button';
import IconModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit';
import IconCheckBox from 'material-ui/lib/svg-icons/toggle/check-box';
import IconCheckBoxEmpty from 'material-ui/lib/svg-icons/toggle/check-box-outline-blank';
import { LoadingProgress } from '../widgets';

class AddressList extends Component {
	componentDidMount() {
		!this.props.addresses&&this.props.loadUserAddresses();
	}
	render() {
		const { selectable, selectItem, loading, addresses, onItemClicked } = this.props;
		
		return (
			<List style={styles.container}>
				{(loading&&!addresses)?<LoadingProgress/>:
					(addresses&&addresses.map((address, index) => {
						let rightIcon;
						if (selectable) {
							rightIcon = (selectItem&&(selectItem.id===address.id))?<IconCheckBox/>:<IconCheckBoxEmpty/>;
						} else {
							rightIcon = <IconModeEdit/>;
						}

						return (
							<AddressListItem key={index} {...address} onClick={() => onItemClicked(address)}
								rightIconButton={<IconButton>{rightIcon}</IconButton>}/>
						)
					}))
				}
			</List>
		);
	}
}

AddressList.propTypes = {
	selectable: PropTypes.bool,
	selectItem: PropTypes.object,
	loading: PropTypes.bool,
	addresses: PropTypes.array,
	loadUserAddresses: PropTypes.func.isRequired,
	onItemClicked: PropTypes.func.isRequired
};

AddressList.defaultProps = {
	selectIndex: -1
};

const styles = {
	container: {
		paddingTop: '0px',
		overflow: 'auto'
	}
};

export default AddressList;