import React, { PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';

let ProductGridItem = ({id, nameCn, nameEn, imageUrl}) => (
	<Paper style={styles.container} zDepth={1}>
    <GridTile key={index} title={nameEn}
      subtitle={<span>{nameCn}</span>}
      actionIcon={<IconButton><StarBorder color="white" /></IconButton>}>
      <img src={imageUrl} />
    </GridTile>
  </Paper>
);

ProductGridItem.propTypes = {
	
};

const styles = {
	container: {
		margin: '10px 10px'
	}
};

export default ProductGridItem;