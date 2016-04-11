import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

class DropDownSelector extends Component {
	constructor(props) {
		super(props);
		this.onSelectField = this.onSelectField.bind(this);
	}
	onSelectField(event, index, value) {
		this.props.onSelectItem(value==='ALL'?null:value);
	}
	render() {
		const { selectedKey, items, itemKeyName, itemPrimaryName, itemSecondaryName } = this.props;

		let options = [
			<MenuItem key={-1} value='ALL' primaryText='All 所有分类'/>
		];
		items&&items.forEach((item, index) =>
			options.push(<MenuItem key={index} value={item[itemKeyName]}
      	primaryText={`${item[itemPrimaryName]} ${item[itemSecondaryName]}`}/>));

		return (
      <DropDownMenu value={selectedKey||'ALL'} onChange={this.onSelectField}>
      	{options}
      </DropDownMenu>
		);
	}
}

DropDownSelector.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object.isRequired),
	itemKeyName: PropTypes.string.isRequired,
	itemPrimaryName: PropTypes.string.isRequired,
	itemSecondaryName: PropTypes.string.isRequired,
	selectedKey: PropTypes.any,
	onSelectItem: PropTypes.func.isRequired
};

export default DropDownSelector;