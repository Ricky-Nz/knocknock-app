import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import AddressListItem from './AddressListItem';
import IconButton from 'material-ui/IconButton';
import IconModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconCheckBox from 'material-ui/svg-icons/toggle/check-box';
import IconCheckBoxEmpty from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import { LoadingProgress } from '../widgets';

class AddressList extends Component {
	componentDidMount() {
		!this.props.addresses&&this.props.loadUserAddresses();
	}
	render() {
		const { paper, selectable, selectItem, loading, addresses, onItemClicked } = this.props;
		
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

						if (paper) {
							return (
								<Paper key={index} className='margin' zDepth={1}>
									<AddressListItem {...address} onClick={() => onItemClicked(address)}
										rightIconButton={<IconButton>{rightIcon}</IconButton>}/>
								</Paper>
							)
						} else {
							return (
								<div key={index}>
									<AddressListItem {...address} onClick={() => onItemClicked(address)}
										rightIconButton={<IconButton>{rightIcon}</IconButton>}/>
									<Divider/>
								</div>
							);
						}
					}))
				}
			</List>
		);
	}
}

AddressList.propTypes = {
	paper: PropTypes.bool,
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