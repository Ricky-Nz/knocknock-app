import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { LoadingProgress } from '../widgets';

class PaymentProcessingDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
		this.paySuccess = this.paySuccess.bind(this);
		this.payFailed = this.payFailed.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.paying&&!this.props.paying) {
			this.setState({open: true});
		} else if (!nextProps.paying&&this.props.paying&&nextProps.payment) {
			if (nextProps.payment.redirectUrl) {
				window.open(nextProps.payment.redirectUrl);
			} else if (nextProps.payment.expressInfo) {
				window.open(`https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=${nextProps.payment.expressInfo}`);
			}
		}
	}
	paySuccess() {
		this.setState({open: false});
		this.props.onSuccess();
	}
	payFailed() {
		this.setState({open: false});
		if (this.props.onFailed) {
			this.props.onFailed();
		}
	}
	render() {
		const {paying, onFailed, onSuccess} = this.props;

		return (
			<Dialog modal={true} open={this.state.open}
				title={paying?'Processing':'Payment complete?'}
				actions={paying?null:[
		      <FlatButton label='Failed' primary={true}
		        onClick={this.payFailed}/>,
		      <FlatButton label='Success' primary={true}
		        onClick={this.paySuccess}/>
				]}>
				{paying&&<LoadingProgress/>}
			</Dialog>
		);
	}
}

PaymentProcessingDialog.propTypes = {
	paying: PropTypes.bool,
	payment: PropTypes.object,
	onSuccess: PropTypes.func.isRequired,
	onFailed: PropTypes.func
};

export default PaymentProcessingDialog;