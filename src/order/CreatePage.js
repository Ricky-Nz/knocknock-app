import React, { Component, PropTypes } from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import { ActionBar } from '../widgets';
import CreateStepPickAddress from './CreateStepPickAddress';
import CreateStepPickTime from './CreateStepPickTime';
import CreateStepPreview from './CreateStepPreview';

class CreateOrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: props.location.query.express?2:0
    };
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.creating&&this.props.creating&&nextProps.processSuccess) {
      this.props.listOrders();
      this.context.router.goBack();  
    }
  }
  onContinue = () => {
    const { activeStep } = this.state;
    const { address, pickupDate, pickupTime, note } = this.props.penndingOrder;

    if (activeStep === 0) {
      if (!address) {
        return this.props.toast('Please select one of addresses');
      }
    } else if (activeStep === 1) {
      if (!pickupDate) {
        return this.props.toast('Please select the pickup date');
      } else if (!pickupTime) {
        return this.props.toast('Please select the pickup time');
      }
    }

    if (activeStep === 2) {
      const formatDate = moment(pickupDate).hour(pickupTime.split(':')[0])
        .minute(0).second(0).millisecond(0).format('YYYY-MM-DD HH:mm:ss');
      this.props.createOrder({
        description: note,
        pickupPostalCode: address.postal_code,
        pickupAddress: address.address,
        pickupDate: formatDate
      });
      this.props.recordLastUsedAddress(address);
    } else {
      this.setState({
        activeStep: activeStep + 1
      });
    }
  }
  onBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  }
	render() {
    const { activeStep } = this.state;
    const { creating } = this.props;
    let stepContent = null;
    switch(activeStep) {
      case 0: stepContent = <CreateStepPickAddress/>; break;
      case 1: stepContent = <CreateStepPickTime/>; break;
      case 2: stepContent = <CreateStepPreview/>; break;
    }

		return (
			<div className='flex flex-fill page' style={styles.page}>
        <ActionBar title='Create Order'
          leftMenu={<IconButton onClick={this.context.router.goBack}><IconBack/></IconButton>}
          rightMenu={creating?<CircularProgress size={0.5}/>:null}/>
        <div className='flex flex-fill'>
          <Stepper horizontal={true} activeStep={activeStep}>
            <Step><StepLabel>Pick Address</StepLabel></Step>
            <Step><StepLabel>Pick Date</StepLabel></Step>
            <Step><StepLabel>Submit</StepLabel></Step>
          </Stepper>
          <div className='flex flex-fill'>
            {stepContent}
          </div>
          <Paper className='flex flex-row flex-space-between flex-align-center padding' zDepth={2}>
            {(activeStep > 0)?<FlatButton label='Back' onClick={this.onBack} disabled={creating}/>:<p/>}
            <RaisedButton label={activeStep===2?'Submit New Order':'Continue'}
              primary={true} onClick={this.onContinue} disabled={creating}/>
          </Paper>
        </div>
			</div>
		);
	}
}

CreateOrderPage.contextTypes = {
  router: React.PropTypes.object
};

CreateOrderPage.propTypes = {
  penndingOrder: PropTypes.object,
  creating: PropTypes.bool,
  processSuccess: PropTypes.bool,
  createOrder: PropTypes.func.isRequired,
  listOrders: PropTypes.func.isRequired,
  recordLastUsedAddress: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired
};

export default CreateOrderPage;