import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import IconCheckBox from 'material-ui/svg-icons/toggle/check-box';
import IconCheckBoxEmpty from 'material-ui/svg-icons/toggle/check-box-outline-blank';
import { AddressList } from '../containers';
import { List, ListItem } from 'material-ui/List';

let PickupTimeChooser = ({open, select, onSelect, onCancel}) => (
	<Dialog bodyStyle={styles.bodyStyle}
		modal={false} open={open} onRequestClose={onCancel}>
		<List>
			{
				[{start: '9:00', end: '11:00'},
				{start: '11:00', end: '13:00'},
				{start: '13:00', end: '15:00'},
				{start: '15:00', end: '16:00'},
				{start: '17:00', end: '19:00'},
				{start: '19:00', end: '21:00'}].map(({start, end}, index) =>
					<ListItem key={index} primaryText={`${start} ~ ${end}`} onClick={() => onSelect(start)}
						rightIcon={(select===start)?<IconCheckBox/>:<IconCheckBoxEmpty/>}/>)
			}
		</List>
	</Dialog>
);

PickupTimeChooser.propTypes = {
	open: PropTypes.bool,
	select: PropTypes.string,
	onSelect: PropTypes.func.isRequired,
	onCancel: PropTypes.func.isRequired
};

PickupTimeChooser.defaultProps = {
	open: false
};

const styles = {
	bodyStyle: {
		padding: 0
	}
};

export default PickupTimeChooser;