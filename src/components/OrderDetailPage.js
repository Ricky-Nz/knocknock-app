import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import RaisedButton from 'material-ui/lib/raised-button';
import IconButton from 'material-ui/lib/icon-button';
import IconRefresh from 'material-ui/lib/svg-icons/navigation/refresh';
import ArrowBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
import IconDone from 'material-ui/lib/svg-icons/action/done';
import Stepper from 'material-ui/lib/Stepper/Stepper';
import Step from 'material-ui/lib/Stepper/HorizontalStep';
import OrderProfile from './OrderProfile';
import CircularProgress from 'material-ui/lib/circular-progress';
import Paper from 'material-ui/lib/paper';
import { LoadingProgress } from '../widgets';
import { blueGrey500 } from 'material-ui/lib/styles/colors';

class OrderDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onClosePage = this.onClosePage.bind(this);
		this.onSelectStep = this.onSelectStep.bind(this);
		this.updateCompletedSteps = this.updateCompletedSteps.bind(this);
		this.onCreateIcon = this.onCreateIcon.bind(this);
		this.onRefresh = this.onRefresh.bind(this);
		this.onPay = this.onPay.bind(this);
	}
	componentDidMount() {
		!this.props.loading&&!this.props.order&&this.props.load();
	}
	onClosePage() {
		this.context.router.goBack();
	}
  onSelectStep(currentStep) {
    if (currentStep <= this.props.order.step) {
	    this.setState({
	      selectStep: currentStep
	    });
    }
  }
  updateCompletedSteps(currentStep) {
    return currentStep < this.props.order.step;
  }
  onCreateIcon(step) {
    if (step.props.stepIndex <= this.props.order.step) {
      return <IconDone/>;
    } else {
    	return <span>{step.props.orderStepLabel}</span>;
    }
  }
  onRefresh() {
  	this.props.load();
  }
  onPay() {

  }
	render() {
		const { status, step, pickup_address, pickup_contact_no,
			pickup_date, pickup_postal_code, pickup_time, to_pay_price, paid, created_on } = this.props.order||{};
		const { selectStep } = this.state;

		return (
			<div className='flex flex-fill page'>
			  <AppBar title='Order Detail'
			    iconElementLeft={<IconButton onClick={this.onClosePage}><ArrowBack/></IconButton>}
			    iconElementRight={this.props.loading?<CircularProgress size={0.5} color='white'/>:
						<IconButton onClick={this.onRefresh}><IconRefresh/></IconButton>}/>
				{(this.props.loading||!this.props.order)?<LoadingProgress/>:
					<div className='flex flex-fill'>
		        <Stepper horizontal={true} activeStep={selectStep>=0?selectStep:step} containerStyle={styles.blank} connectorLineStyle={styles.blank}
		          onStepHeaderTouch={this.onSelectStep} updateCompletedStatus={this.updateCompletedSteps}
		          createIcon={this.onCreateIcon}>
		          <Step orderStepLabel='1' stepLabel='Pending Worker'>
		          </Step>
		          <Step orderStepLabel='2' stepLabel='Laundry in progress'>
		          </Step>
		          <Step orderStepLabel='3' stepLabel='Laundry Complete'>
		          </Step>
		        </Stepper>
						<Paper zDepth={1} className='flex flex-row flex-align-center flex-space-between' style={styles.titleContainer}>
							<p style={styles.statusText}>{status}</p>
							{paid?<p style={styles.priceText}>{`S$${to_pay_price} Paid`}</p>:
								<RaisedButton onClick={this.onPay} label={`Pay S$${to_pay_price}`} primary={true}/>}
						</Paper>
		        <div style={styles.container}>
		        	<OrderProfile address={pickup_address} postalCode={pickup_postal_code}
		        		contactNo={pickup_contact_no} pickupTime={pickup_time} pickupDate={pickup_date}/>
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
	blank: {
		height: 0
	},
	titleContainer: {
		padding: 16
	},
	container: {
		padding: 32
	},
	statusText: {
		color: blueGrey500,
		fontSize: '1.5em'
	},
	priceText: {
		color: blueGrey500,
		fontSize: '1.2em'
	}
};

export default OrderDetailPage;
