import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import IconButton from 'material-ui/lib/icon-button';
import IconSearch from 'material-ui/lib/svg-icons/action/search';
import IconClose from 'material-ui/lib/svg-icons/navigation/close';

class SearchMenu extends Component {
	constructor(props) {
		super(props);
		this.state = { expend: false, searchText: '' };
		this.onToggleExpend = this.onToggleExpend.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
	}
	onToggleExpend() {
		this.setState({
			expend: !this.state.expend,
			searchText: ''
		});
	}
	onSearchChange(event) {
		this.setState({searchText: event.target.value});
		this.props.onSearchTextChange(event.target.value);
	}
	render() {
		const { expend, searchText } = this.state;

		return (
			expend?
				<div className='flex flex-row flex-align-center padding-left'>
					<TextField hintText='search product' dataSource={this.props.dataSource}
	          onChange={this.onSearchChange} inputStyle={styles.inputStyle}
	          underlineFocusStyle={styles.underlineStyle} searchText={searchText}/>
	        <IconButton onClick={this.onToggleExpend}><IconClose color='white'/></IconButton>
        </div>:
				<IconButton onClick={this.onToggleExpend}><IconSearch color='white'/></IconButton>
		);
	}
}

SearchMenu.propTypes = {
	onSearchTextChange: PropTypes.func.isRequired
};

const styles = {
	underlineStyle: {
		borderColor: 'white'
	},
	inputStyle: {
		color: 'white'
	}
};

export default SearchMenu;