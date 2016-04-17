import React, { Component, PropTypes } from 'react';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import OrderProfile from './OrderProfile';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { LoadingProgress } from '../widgets';
import { deepOrange500 } from 'material-ui/styles/colors';
import { Tabs, Tab } from 'material-ui/Tabs';
import OrderItemList from './OrderItemList';
import { OrderStatusActionBanner } from '../containers';
import { ActionBar } from '../widgets';

class OrderDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onRefresh = this.onRefresh.bind(this);
	}
	componentDidMount() {
		if (!this.props.order||this.props.order.id!==this.props.params.orderId) {
			this.props.load(this.props.params.orderId);
		}
	}
  onRefresh() {
  	this.props.load(this.props.params.orderId, true);
  }
	render() {
		const { id, status, step, pickup_address, pickup_contact_no, qr_code_url, order_details,
			pickup_date, pickup_postal_code, pickup_time, to_pay_price, paid, created_on } = this.props.order||{};
		const { selectStep } = this.state;
		const { loading, paying } = this.props;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title={(!id&&loading)?'Loading...':`Order No.${id}`} running={this.props.loading}
					onLeftMenuClicked={this.context.router.goBack} running={loading||paying}
					rightIcon={<IconRefresh/>} onRightMenuClicked={this.onRefresh}/>
				{(!this.props.order||(loading&&id!=this.props.params.orderId))?<LoadingProgress/>:
					<div className='flex flex-fill position-relative'>
						<div className='scroll'>
							<OrderStatusActionBanner id={id} status={status}
								to_pay_price={to_pay_price} paid={paid}/>
							<Paper zDepth={2}>
								<Tabs tabItemContainerStyle={styles.tabBar} inkBarStyle={styles.inkBarStyle}>
									<Tab style={styles.tabItem} label='Details'>
										<br/>
										<OrderProfile address={pickup_address} postal_code={pickup_postal_code}
						        	contact_no={pickup_contact_no} pickupTime={pickup_time} pickupDate={pickup_date}/>
						        <div className='padding-horizontal'>
							        <Stepper orientation='vertical' activeStep={selectStep>=0?selectStep:step}>
							          <Step><StepLabel>Pending Worker</StepLabel></Step>
							          <Step><StepLabel>Laundry in progress</StepLabel></Step>
							          <Step><StepLabel>Laundry Complete</StepLabel></Step>
							        </Stepper>
							        <div className='flex flex-center flex-align-center'>
							        	<img style={styles.qrCode} src={qr_code_url}/>
							        	<br/><br/><br/>
							        </div>
						        </div>
									</Tab>
									<Tab style={styles.tabItem} label='Received Items'>
										<OrderItemList items={order_details}/>
									</Tab>
								</Tabs>
							</Paper>
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
	load: PropTypes.func.isRequired
};

const styles = {
	tabBar: {
		backgroundColor: 'white',
		height: 44
	},
	tabItem: {
		color: 'black'
	},
	inkBarStyle: {
		backgroundColor: deepOrange500
	},
	qrCode: {
		width: 200,
		height: 200
	}
};

export default OrderDetailPage;
