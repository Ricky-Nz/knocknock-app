import React, { PropTypes } from 'react';
import Paper from 'material-ui/lib/paper';
import GridTile from 'material-ui/lib/grid-list/grid-tile';

let ProductGridItem = ({id, nameCn, nameEn, ironPrice, imageUrl}) => (
	<Paper style={styles.container} zDepth={1}>
    <GridTile title={nameEn}
      subtitle={<span>{nameCn} S${ironPrice}</span>}>
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