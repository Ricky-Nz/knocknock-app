import React, { Component, PropTypes } from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import { Tabs, Tab } from 'material-ui/Tabs';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import Paper from 'material-ui/Paper';
import { ActionBar, LoadingProgress } from '../app_widgets';
import { deepOrange500 } from 'material-ui/styles/colors';
import { ProductList } from '../product';
import RefreshMenuContainer from './RefreshMenuContainer';
import { OrderPaymentBanner } from '../payment';
import BasicProfile from './BasicProfile';

class OrderDetailPage extends Component {
	componentDidMount() {
		if (!this.props.order||this.props.order.id!==this.props.params.orderId) {
			this.props.getOrder(this.props.params.orderId);
		}
	}
	render() {
		const { processing } = this.props;
		const { id, status, step, pickup_address, pickup_contact_no, qr_code_url, order_details,
			pickup_date, pickup_postal_code, pickup_time, to_pay_price, paid, created_on } = this.props.order||{};
		const orderNotReady = !this.props.order;

		return (
			<div className='flex flex-fill page'>
				<ActionBar title={orderNotReady?'Loading...':`Order No.${id}`}
					leftMenu={<IconButton onClick={this.context.router.goBack}><IconBack/></IconButton>}
					rightMenu={<RefreshMenuContainer/>}/>
				{orderNotReady?<LoadingProgress/>:
					<div className='flex flex-fill position-relative'>
						<div className='scroll'>
							<OrderPaymentBanner/>
							<Paper zDepth={2}>
								<Tabs tabItemContainerStyle={styles.tabBar} inkBarStyle={styles.inkBarStyle}>
									<Tab style={styles.tabItem} label='Details'>
										<br/>
										<BasicProfile address={pickup_address} postal_code={pickup_postal_code}
						        	contact_no={pickup_contact_no} pickupTime={pickup_time} pickupDate={pickup_date}/>
						        <div className='padding-horizontal'>
							        <Stepper orientation='vertical' activeStep={step}>
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
										<ProductList items={order_details}/>
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
	processing: PropTypes.bool,
	getOrder: PropTypes.func.isRequired
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
