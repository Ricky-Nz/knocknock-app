import React, { Component, PropTypes } from 'react';
import { yellowA100, greenA100, grey300, blueGrey800 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import IconAtm from 'material-ui/svg-icons/maps/local-atm';
import IconPayment from 'material-ui/svg-icons/action/payment';
import { LoadingProgress } from '../app_widgets';
import PayProcessDialogContainer from './PayProcessDialogContainer';

class OrderPaymentBanner extends Component {
  onPayByCredit = () => {
  	this.props.payOrderByCredit(this.props.order.id);
  }
  onPayByPaypal = () => {
  	this.props.payOrderByPaypal(this.props.order.id, this.props.order.to_pay_price);
  }
	render() {
		const { id, status, to_pay_price, paid } = this.props.order||{};
		const hasPrice = to_pay_price > 0;
		const processing = this.props.processing;
		
		return (
			<div className='padding'
				style={paid?styles.paidBanner:(hasPrice?styles.requirePayBanner:styles.defaultBanner)}>
				<div className='flex flex-row flex-align-center flex-space-between'>
					<p>STATUS</p>
					{hasPrice&&<p>Total Price</p>}
				</div>
				<div className='flex flex-row flex-align-center flex-space-between'>
					<p style={styles.primaryText}>{status}</p>
					{hasPrice&&<p style={styles.primaryText}>{`S$${to_pay_price} ${paid?'Paid':'Unpaid'}`}</p>}
				</div>
				{!paid&&hasPrice&&
					<div className='padding-top'>
						<p style={styles.promptText}>Make Payment</p>
						{processing?<LoadingProgress size={0.5} label='processing...'/>:
							<div className='flex flex-row'>
								<RaisedButton style={styles.leftButton} className='flex-fill'
									onClick={this.onPayByCredit} label='by Credit' labelPosition='after' icon={<IconAtm/>}/>
								<RaisedButton style={styles.rightButton} className='flex-fill'
									onClick={this.onPayByPaypal} label='by Paypal' labelPosition='after' icon={<IconPayment/>}/>
							</div>
						}
					</div>
				}
				<PayProcessDialogContainer/>
			</div>
		);
	}
}

OrderPaymentBanner.propTypes = {
	processing: PropTypes.bool,
	order: PropTypes.object,
	payByCredit: PropTypes.func.isRequired,
	payByPaypal: PropTypes.func.isRequired
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

export default OrderPaymentBanner;