import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import IconGift from 'material-ui/svg-icons/action/card-giftcard';
import { ListItem } from 'material-ui/List';
import { TimeDisplay } from '../widgets';
import { yellow200 } from 'material-ui/styles/colors';

let VoucherListItem = ({title, value, expire_on, onClick}) => (
	<Paper className='half-margin' zDepth={1}>
	  <ListItem style={styles.container} onClick={onClick} primaryText={`S$${value} OFF`}
	    secondaryText={
	      <div>
	        <p>{title}</p>
	        <p>Expire on: <TimeDisplay>{expire_on}</TimeDisplay></p>
	      </div>
	    } secondaryTextLines={2} rightIcon={<IconGift/>}/>
  </Paper>
);

const styles = {
	container: {
		backgroundColor: yellow200
	}
};

export default VoucherListItem;