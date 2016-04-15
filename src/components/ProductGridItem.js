import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { GridTile } from 'material-ui/GridList';

let ProductGridItem = ({id, name_ch, name_en, iron_price, image_url}) => (
	<Paper style={styles.container} zDepth={1}>
    <GridTile title={name_en} subtitle={`S$${iron_price}`}>
      <img src={image_url} />
    </GridTile>
  </Paper>
);

ProductGridItem.propTypes = {
	
};

const styles = {
	container: {
		margin: 8
	}
};

export default ProductGridItem;