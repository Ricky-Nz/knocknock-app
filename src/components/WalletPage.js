import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import IconMenu from 'material-ui/lib/svg-icons/navigation/menu';

class WalletPage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='fillHeight page'>
				<AppBar title='My Wallet'
					iconElementLeft={<IconButton onClick={this.props.onDrawerClick}><IconMenu/></IconButton>}/>
			</div>
		);
	}
}

WalletPage.contextTypes = {
  router: React.PropTypes.object
};

WalletPage.propTypes = {
	onDrawerClick: PropTypes.func.isRequired
};

const styles = {

};

export default WalletPage;