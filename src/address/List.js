import React, { Component, PropTypes } from 'react';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import IconModeDelete from 'material-ui/svg-icons/action/delete-forever';
import IconCheckBox from 'material-ui/svg-icons/toggle/radio-button-checked';
import IconCheckBoxEmpty from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import { LoadingProgress } from '../app_widgets';
import ListItem from './ListItem';

class AddressList extends Component {
	componentDidMount() {
		const { processing, listAddresses } = this.props;
		!processing&&listAddresses();
	}
	render() {
		const { processing, addresses, preDeleteAddress, emptyView, paper, selectable, selectItem,
			onItemClicked } = this.props;

		if (processing&&!addresses) {
			return <LoadingProgress/>;
		} else if (!addresses||addresses.length===0) {
			return emptyView;
		}
		
		return (
			<List className='scroll'>
				{
					addresses.map((address, index) => {
						let rightButton;
						if (selectable) {
							rightButton = <IconButton>{(selectItem&&(selectItem.id===address.id))?<IconCheckBox/>:<IconCheckBoxEmpty/>}</IconButton>;
						} else {
							rightButton = <IconButton onClick={() => preDeleteAddress(address)}><IconModeDelete/></IconButton>;
						}

						if (paper) {
							return (
								<Paper key={index} className='half-margin' zDepth={1}>
									<ListItem {...address} onTouchTap={() => onItemClicked(address)}
										rightIconButton={rightButton}/>
								</Paper>
							)
						} else {
							return (
								<div key={index}>
									<ListItem {...address} onTouchTap={() => onItemClicked(address)}
										rightIconButton={rightButton}/>
									<Divider/>
								</div>
							);
						}
					})
				}
			</List>
		);
	}
}

AddressList.propTypes = {
	processing: PropTypes.bool,
	addresses: PropTypes.arrayOf(PropTypes.object),
	preDeleteAddress: PropTypes.func.isRequired,
	listAddresses: PropTypes.func.isRequired,
	emptyView: PropTypes.node,
	paper: PropTypes.bool,
	selectable: PropTypes.bool,
	selectItem: PropTypes.object,
	onItemClicked: PropTypes.func.isRequired
};

export default AddressList;