import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class DropDownSelector extends Component {
	constructor(props) {
		super(props);
		this.onSelectField = this.onSelectField.bind(this);
	}
	onSelectField(event, index, value) {
		this.props.onSelectItem(value);
	}
	render() {
		const { selectedKey, items, itemKeyName, displayPrefix,
			itemPrimaryName } = this.props;

		return (
      <DropDownMenu value={selectedKey} onChange={this.onSelectField}>
      	{items&&
      		items.map((item, index) => {
      			const text = item[itemPrimaryName];
      			return (
							<MenuItem key={index} value={item[itemKeyName]}
								label={displayPrefix&&`${displayPrefix} ${text}`} primaryText={text}/>
      			);
      		})
				}
      </DropDownMenu>
		);
	}
}

DropDownSelector.propTypes = {
	displayPrefix: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.object.isRequired),
	itemKeyName: PropTypes.string.isRequired,
	itemPrimaryName: PropTypes.string.isRequired,
	selectedKey: PropTypes.any.isRequired,
	onSelectItem: PropTypes.func.isRequired
};

export default DropDownSelector;