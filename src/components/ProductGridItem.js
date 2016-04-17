import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { GridTile } from 'material-ui/GridList';

let ProductGridItem = ({id, name_ch, name_en, iron_price,
	wash_iron_price, dry_clean_price, image_url}) => (
	<Paper zDepth={1}>
    <GridTile titlePosition='top'
      title={<p style={styles.titleContainer}>{name_en}</p>}
      subtitle={
      	<div style={styles.titleContainer}>
      		<div className='flex flex-row flex-space-between'>
	      		<p>Iron</p>
	      		<p>Wash Iron</p>
	      		<p>Dry Clean</p>
      		</div>
      		<div className='flex flex-row flex-space-between'>
	      		<p>{`${iron_price}`}</p>
	      		<p>{`${wash_iron_price}`}</p>
	      		<p>{`${dry_clean_price}`}</p>
      		</div>
      	</div>
      }>
      <img src={image_url} />
    </GridTile>
  </Paper>
);

const styles = {
	titleContainer: {
		paddingRight: 16
	}
}

export default ProductGridItem;