import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconAtm from 'material-ui/svg-icons/maps/local-atm';
import IconDone from 'material-ui/svg-icons/action/done';
import IconPayment from 'material-ui/svg-icons/action/payment';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import OrderProfile from './OrderProfile';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { LoadingProgress } from '../widgets';
import { yellowA100, blueGrey800 } from 'material-ui/styles/colors';

class OrderDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onClosePage = this.onClosePage.bind(this);
		this.onRefresh = this.onRefresh.bind(this);
		this.onPayByCredit = this.onPayByCredit.bind(this);
		this.onPayByPaypal = this.onPayByPaypal.bind(this);
	}
	componentDidMount() {
		if (!this.props.order||this.props.order.id!==this.props.params.orderId) {
			this.props.load(this.props.params.orderId);
		}
	}
	onClosePage() {
		this.context.router.goBack();
	}
  onRefresh() {
  	this.props.load(this.props.params.orderId);
  }
  onPayByCredit() {
  	this.props.payOrderByCredit(this.props.order.id);
  }
  onPayByPaypal() {
  	this.props.payOrderByPaypal(this.props.order.id,
  		this.props.order.to_pay_price);
  }
	render() {
		const { status, step, pickup_address, pickup_contact_no,
			pickup_date, pickup_postal_code, pickup_time, to_pay_price, paid, created_on } = this.props.order||{};
		const { selectStep } = this.state;
		const { loading, paying } = this.props;

		return (
			<div className='flex flex-fill page'>
			  <AppBar title='Order Detail'
			    iconElementLeft={<IconButton onClick={this.onClosePage}><ArrowBack/></IconButton>}
			    iconElementRight={(loading||paying)?<CircularProgress size={0.5} color='white'/>:
						<IconButton onClick={this.onRefresh}><IconRefresh/></IconButton>}/>
				{(this.props.loading||!this.props.order)?<LoadingProgress/>:
					<div className='flex flex-fill'>
						<div className='padding' style={paid?null:styles.requirePayment}>
							<div className='flex flex-row flex-align-center flex-space-between'>
								<p style={styles.statusText}>{status}</p>
								<p style={styles.priceText}>{`S$${to_pay_price} ${paid?'Paid':'Unpaid'}`}</p>
							</div>
							{!paid&&
								<div className='padding-top'>
									<p style={styles.paymentText}>Make Payment</p>
									<div className='flex flex-row'>
										<RaisedButton style={styles.leftButton} className='flex-fill' disabled={paying}
											onClick={this.onPayByCredit} label='by Credit' labelPosition='after' icon={<IconAtm/>}/>
										<RaisedButton style={styles.rightButton} className='flex-fill' disabled={paying}
											onClick={this.onPayByPaypal} label='by Paypal' labelPosition='after' icon={<IconPayment/>}/>
									</div>
								</div>
							}
						</div>
		        <div className='padding'>
							<OrderProfile address={pickup_address} postal_code={pickup_postal_code}
		        		contact_no={pickup_contact_no} pickupTime={pickup_time} pickupDate={pickup_date}/>
			        <Stepper orientation='vertical' activeStep={selectStep>=0?selectStep:step}>
			          <Step><StepLabel>Pending Worker</StepLabel></Step>
			          <Step><StepLabel>Laundry in progress</StepLabel></Step>
			          <Step><StepLabel>Laundry Complete</StepLabel></Step>
			        </Stepper>
		        </div>
					</div>
				}
			</div>
		);
	}
}

OrderDetailPage.contextTypes = {
  router: PropTypes.object
};

OrderDetailPage.propTypes = {
	order: PropTypes.object,
	loading: PropTypes.bool,
	paying: PropTypes.bool,
	load: PropTypes.func.isRequired,
	payOrderByCredit: PropTypes.func.isRequired,
	payOrderByPaypal: PropTypes.func.isRequired
};

const styles = {
	statusText: {
		color: blueGrey800,
		fontSize: '1.5em'
	},
	priceText: {
		color: blueGrey800,
		fontSize: '1.2em'
	},
	paymentText: {
		color: blueGrey800,
		fontSize: '1.2em',
		paddingBottom: 8
	},
	requirePayment: {
		backgroundColor: yellowA100
	},
	leftButton: {
		marginRight: 8
	},
	rightButton: {
		marginLeft: 8
	}
};

export default OrderDetailPage;
