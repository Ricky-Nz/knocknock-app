import React, { Component, PropTypes } from 'react';
import { yellowA100, greenA100, grey300, blueGrey800 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import IconAtm from 'material-ui/svg-icons/maps/local-atm';
import IconPayment from 'material-ui/svg-icons/action/payment';
import { PaymentProcessingDialog } from '../containers';
import { LoadingProgress } from '../widgets';

class OrderStatusActionBanner extends Component {
	constructor(props) {
		super(props);
		this.onPayByCredit = this.onPayByCredit.bind(this);
		this.onPayByPaypal = this.onPayByPaypal.bind(this);
		this.onPaymentSuccess = this.onPaymentSuccess.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		if (!nextProps.creditPaying&&this.props.creditPaying&&nextProps.creditPaySuccess) {
			this.onPaymentSuccess();
		}
	}
  onPayByCredit() {
  	this.props.payOrderByCredit(this.props.id);
  }
  onPayByPaypal() {
  	this.props.payOrderByPaypal(this.props.id,
  		this.props.to_pay_price);
  }
  onPaymentSuccess() {
  	this.props.refreshOrder(this.props.id);
  }
	render() {
		const { id, status, to_pay_price, paid, creditPaying } = this.props;
		return (
			<div className='padding'
				style={paid?styles.paidBanner:(to_pay_price?styles.requirePayBanner:styles.defaultBanner)}>
				<div className='flex flex-row flex-align-center flex-space-between'>
					<p>STATUS</p>
					<p>Total Price</p>
				</div>
				<div className='flex flex-row flex-align-center flex-space-between'>
					<p style={styles.primaryText}>{status}</p>
					{to_pay_price&&<p style={styles.primaryText}>{`S$${to_pay_price} ${paid?'Paid':'Unpaid'}`}</p>}
				</div>
				{!paid&&to_pay_price&&
					<div className='padding-top'>
						<p style={styles.promptText}>Make Payment</p>
						{creditPaying?<LoadingProgress size={0.5} label='processing...'/>:
							<div className='flex flex-row'>
								<RaisedButton style={styles.leftButton} className='flex-fill'
									onClick={this.onPayByCredit} label='by Credit' labelPosition='after' icon={<IconAtm/>}/>
								<RaisedButton style={styles.rightButton} className='flex-fill'
									onClick={this.onPayByPaypal} label='by Paypal' labelPosition='after' icon={<IconPayment/>}/>
							</div>
						}
					</div>
				}
				<PaymentProcessingDialog onSuccess={this.onPaymentSuccess}/>
			</div>
		);
	}
}

OrderStatusActionBanner.propTypes = {
	id: PropTypes.any.isRequired,
	status: PropTypes.string.isRequired,
	to_pay_price: PropTypes.any,
	paid: PropTypes.bool,
	payOrderByCredit: PropTypes.func.isRequired,
	payOrderByPaypal: PropTypes.func.isRequired,
	refreshOrder: PropTypes.func.isRequired,
	creditPaying: PropTypes.bool,
	creditPaySuccess: PropTypes.bool
};

const styles = {
	defaultBanner: {
		backgroundColor: grey300
	},
	paidBanner: {
		backgroundColor: greenA100
	},
	requirePayBanner: {
		backgroundColor: yellowA100
	},
	primaryText: {
		color: blueGrey800,
		fontSize: '1.4em'
	},
	promptText: {
		color: blueGrey800,
		fontSize: '1.2em',
		paddingBottom: 8
	},
	leftButton: {
		marginRight: 8
	},
	rightButton: {
		marginLeft: 8
	}
};

export default OrderStatusActionBanner;