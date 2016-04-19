import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { GridTile } from 'material-ui/GridList';

let GridItem = ({id, name_ch, name_en, iron_price,
	wash_iron_price, dry_clean_price, image_url}) => (
	<Paper zDepth={1}>
    <GridTile titlePosition='top'
      title={<p className='padding-right'>{name_en}</p>}
      subtitle={
      	<div className='padding-right'>
      		<div className='flex flex-row flex-space-between'>
	      		<p>Iron</p>
	      		<p>Wash Iron</p>
	      		<p>Dry Clean</p>
      		</div>
      		<div className='flex flex-row flex-space-between'>
	      		<p>{`${iron_price||'N/A'}`}</p>
	      		<p>{`${wash_iron_price||'N/A'}`}</p>
	      		<p>{`${dry_clean_price||'N/A'}`}</p>
      		</div>
      	</div>
      }>
      <img src={image_url} />
    </GridTile>
  </Paper>
);

GridItem.propTypes = {
  id: PropTypes.any.isRequired,
  name_ch: PropTypes.string.isRequired,
  name_en: PropTypes.string.isRequired,
  iron_price: PropTypes.string,
  wash_iron_price: PropTypes.string,
  dry_clean_price: PropTypes.string,
  image_url: PropTypes.string.isRequired
};

const styles = {
	titleContainer: {
		paddingRight: 16
	}
}

export default GridItem;