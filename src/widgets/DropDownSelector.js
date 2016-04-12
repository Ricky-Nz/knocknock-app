import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

class DropDownSelector extends Component {
	constructor(props) {
		super(props);
		this.onSelectField = this.onSelectField.bind(this);
	}
	onSelectField(event, index, value) {
		this.props.onSelectItem(value);
	}
	render() {
		const { selectedKey, items, itemKeyName, itemPrimaryName, itemSecondaryName } = this.props;

		return (
      <DropDownMenu value={selectedKey} onChange={this.onSelectField}>
      	{items&&
      		items.map((item, index) =>
						<MenuItem key={index} value={item[itemKeyName]}
      				primaryText={`${item[itemPrimaryName]} ${item[itemSecondaryName]}`}/>)
				}
      </DropDownMenu>
		);
	}
}

DropDownSelector.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object.isRequired),
	itemKeyName: PropTypes.string.isRequired,
	itemPrimaryName: PropTypes.string.isRequired,
	itemSecondaryName: PropTypes.string.isRequired,
	selectedKey: PropTypes.any.isRequired,
	onSelectItem: PropTypes.func.isRequired
};

export default DropDownSelector;