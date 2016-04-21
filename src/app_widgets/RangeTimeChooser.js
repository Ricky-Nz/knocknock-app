import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import IconEdit from 'material-ui/svg-icons/editor/mode-edit';
import IconCheckBox from 'material-ui/svg-icons/toggle/check-box';
import IconCheckBoxEmpty from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';

class RangeTimeChooser extends Component {
	constructor(props) {
		super(props);
		this.state = {show: false};
		this.onToggleDialog = this.onToggleDialog.bind(this);
	}
	onToggleDialog() {
		this.setState({show: !this.state.show});
	}
	render() {
		const { time } = this.props;

		return (
			<div>
				<ListItem rightIcon={<IconEdit/>} onClick={this.onToggleDialog}
					primaryText={time?time:'not set'}/>
				<div className='padding-horizontal'>
					<Divider/>
				</div>
				<Dialog bodyStyle={styles.bodyStyle}
					modal={false} open={this.state.show} onRequestClose={this.onToggleDialog}>
					<List>
						{
							[{start: '9:00', end: '11:00'},
							{start: '11:00', end: '13:00'},
							{start: '13:00', end: '15:00'},
							{start: '15:00', end: '16:00'},
							{start: '17:00', end: '19:00'},
							{start: '19:00', end: '21:00'}].map(({start, end}, index) =>
								<ListItem key={index} primaryText={`${start} ~ ${end}`}
									rightIcon={(time===start)?<IconCheckBox/>:<IconCheckBoxEmpty/>}
									onClick={() => {
										this.onToggleDialog();
										this.props.onTimeChange(start);
									}}/>)
						}
					</List>
				</Dialog>
			</div>
		);
	}
}

RangeTimeChooser.propTypes = {
	time: PropTypes.string,
	onTimeChange: PropTypes.func.isRequired
};

const styles = {
	bodyStyle: {
		padding: 0
	}
};

export default RangeTimeChooser;