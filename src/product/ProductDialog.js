import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { ListItem } from 'material-ui/List';

class ProductDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {show: false};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.product!==this.props.product) {
			this.setState({show: true});
		}
	}
	handleClose = () => {
		this.setState({show: false});
	}
	render() {
		const { name_en, image_url, iron_price, wash_iron_price, dry_clean_price } = this.props.product||{};

		return (
      <Dialog title={name_en} actions={[<FlatButton label='ok' primary={true} onTouchTap={this.handleClose}/>]}
        modal={false} open={this.state.show} onRequestClose={this.handleClose}>
        <div>
	        <div className='flex flex-align-center'>
	        	<img src={image_url}/>
	        </div>
					<ListItem primaryText={`Normal price: S$${wash_iron_price}`}/>
					<ListItem primaryText={`Dry clean price: S$${dry_clean_price}`}/>
        </div>
      </Dialog>
		);
	}
}

ProductDialog.propTypes = {
	product: PropTypes.object
};

export default ProductDialog;