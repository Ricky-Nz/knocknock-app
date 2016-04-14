import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import CircularProgress from 'material-ui/lib/circular-progress';

class PaymentProcessingDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
		this.pay = this.pay.bind(this);
		this.paySuccess = this.paySuccess.bind(this);
		this.payFailed = this.payFailed.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.toppingUp&&this.props.toppingUp&&nextProps.topUpInfo) {
			window.open(topUpInfo.redirectUrl);
		}
	}
	pay(amount) {
		this.props.topUp(amount);
		this.setState({open: true});
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
		const {toppingUp, onFailed, onSuccess} = this.props;

		return (
			<Dialog modal={true} open={this.state.open}
				title={toppingUp?<p className='flex flex-row flex-align-center'><CircularProgress size={0.3}/>'Processing'</p>:'Payment complete?'}
				actions={toppingUp?null:[
		      <FlatButton label='Failed' primary={true}
		        onClick={this.payFailed}/>,
		      <FlatButton label='Success' primary={true}
		        onClick={this.paySuccess}/>
				]}/>
		);
	}
}

PaymentProcessingDialog.propTypes = {
	toppingUp: PropTypes.bool,
	topUpInfo: PropTypes.object,
	topUp: PropTypes.func.isRequired,
	onSuccess: PropTypes.func.isRequired,
	onFailed: PropTypes.func
};

export default PaymentProcessingDialog;