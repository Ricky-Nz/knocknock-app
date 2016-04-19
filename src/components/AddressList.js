import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import AddressListItem from './AddressListItem';
import IconButton from 'material-ui/IconButton';
import IconModeDelete from 'material-ui/svg-icons/action/delete-forever';
import IconCheckBox from 'material-ui/svg-icons/toggle/radio-button-checked';
import IconCheckBoxEmpty from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import { LoadingProgress } from '../widgets';

class AddressList extends Component {
	componentDidMount() {
		!this.props.addresses&&this.props.loadUserAddresses();
	}
	render() {
		const { emptyView, paper, selectable, selectItem, loading,
			addresses, onItemClicked, onDeleteItem } = this.props;
		
		return (
			<List style={styles.container}>
				{(loading&&!addresses)?<LoadingProgress/>:
					((!addresses||addresses.length===0)?emptyView:
						addresses.map((address, index) => {
							let rightIcon;
							if (selectable) {
								rightIcon = <IconButton>{(selectItem&&(selectItem.id===address.id))?<IconCheckBox/>:<IconCheckBoxEmpty/>}</IconButton>;
							} else {
								rightIcon = <IconButton onClick={onDeleteItem&&(() => onDeleteItem(address))}><IconModeDelete/></IconButton>;
							}

							if (paper) {
								return (
									<Paper key={index} className='half-margin' zDepth={1}>
										<AddressListItem {...address} onTouchTap={() => onItemClicked(address)}
											rightIconButton={rightIcon}/>
									</Paper>
								)
							} else {
								return (
									<div key={index}>
										<AddressListItem {...address} onTouchTap={() => onItemClicked(address)}
											rightIconButton={rightIcon}/>
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
	emptyView: PropTypes.node,
	paper: PropTypes.bool,
	selectable: PropTypes.bool,
	selectItem: PropTypes.object,
	loading: PropTypes.bool,
	addresses: PropTypes.array,
	loadUserAddresses: PropTypes.func.isRequired,
	onItemClicked: PropTypes.func.isRequired,
	onDeleteItem: PropTypes.func
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