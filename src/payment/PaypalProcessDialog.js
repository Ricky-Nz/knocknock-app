import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { LoadingProgress } from '../widgets';

class PaypalProcessDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.paypal!==this.props.paypal&&!this.state.open) {
			this.setState({open: true});
		} else if (!nextProps.processing&&this.props.processing&&nextProps.palpal) {
			if (nextProps.palpal.redirectUrl) {
				window.open(nextProps.palpal.redirectUrl);
			} else if (nextProps.palpal.token) {
				window.open(`https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=${nextProps.palpal.token}`);
			}
		}
	}
	closeDialog = () => {
		this.setState({open: false});
	}
	render() {
		const processing = this.props.processing;

		return (
			<Dialog modal={true} open={this.state.open}
				title={processing?'Processing':'Payment complete?'}
				actions={processing?null:[
		      <FlatButton label='Failed' primary={true}
		        onClick={this.closeDialog}/>,
		      <FlatButton label='Success' primary={true}
		        onClick={this.closeDialog}/>
				]}>
				{processing&&<LoadingProgress/>}
			</Dialog>
		);
	}
}

PaypalProcessDialog.propTypes = {
	processing: PropTypes.bool,
	palpal: PropTypes.object
};

export default PaypalProcessDialog;