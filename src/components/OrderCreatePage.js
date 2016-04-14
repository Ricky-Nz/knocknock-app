import React, { Component, PropTypes } from 'react';
import Stepper from 'material-ui/lib/Stepper/Stepper';
import Step from 'material-ui/lib/Stepper/HorizontalStep';
import FontIcon from 'material-ui/lib/font-icon';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import ArrowBack from 'material-ui/lib/svg-icons/navigation/arrow-back';
import IconDone from 'material-ui/lib/svg-icons/action/done';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker/time-picker';
import Subheader from 'material-ui/lib/Subheader';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import CircularProgress from 'material-ui/lib/circular-progress';
import { AddressList } from '../containers';
import OrderProfile from './OrderProfile';
import moment from 'moment';

class CreateOrderPage extends Component {
	constructor(props) {
		super(props);

    const minDate = moment().add(1, 'days').toDate();
    const maxDate = moment().add(15, 'days').toDate();

		this.state = {
      activeStep: 0,
      lastActiveStep: 0,
      note: '',
      pickupDate: minDate,
      minPickDate: minDate,
      maxPickDate: maxDate
    };
		this.onClosePage = this.onClosePage.bind(this);
		this.onSelectStep = this.onSelectStep.bind(this);
		this.updateCompletedSteps = this.updateCompletedSteps.bind(this);
		this.onContinue = this.onContinue.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onSelectAddress = this.onSelectAddress.bind(this);
    this.onSelectDate = this.onSelectDate.bind(this);
    this.onPickupDateChange = this.onPickupDateChange.bind(this);
    this.onPickupTimeChange = this.onPickupTimeChange.bind(this);
    this.onDropOffDateChange = this.onDropOffDateChange.bind(this);
    this.onDropOffTimeChange = this.onDropOffTimeChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
	}
  componentWillReceiveProps(nextProps) {
    if (!nextProps.creating&&this.props.creating&&nextProps.success) {
      this.props.refreshOrders();
      this.context.router.goBack();  
    }
  }
	onClosePage() {
		this.context.router.goBack();
	}
  onSelectStep(currentStep) {
    const { lastActiveStep, activeStep } = this.state;

    if (currentStep > lastActiveStep) {
      return;
    }

    this.setState({
      activeStep: currentStep,
      lastActiveStep: Math.max(lastActiveStep, activeStep),
    });
  }
  updateCompletedSteps(currentStep) {
    return currentStep < this.state.lastActiveStep;
  }
  onCreateIcon(step) {
    if (step.props.isCompleted) {
      return <IconDone/>;
    }

    return <span>{step.props.orderStepLabel}</span>;
  }
  onContinue() {
    const { activeStep, lastActiveStep } = this.state;

    if (activeStep === 0) {
      if (!this.state.address) {
        this.props.toast('Please select one of addresses');
        return;
      }
    } else if (activeStep === 1) {
      if (!this.state.pickupDate) {
        this.props.toast('Please select the pickup date');
        return;
      }

      if (!this.state.pickupTime) {
        this.props.toast('Please select the pickup time');
        return;
      }
    }

    if (activeStep === 2) {
      const { address, pickupDate, pickupTime, dropOffDate, dropOffTime, note } = this.state;
      this.props.createOrder({
        description: note,
        pickupPostalCode: address.postal_code,
        pickupAddress: address.address,
        pickupDate: moment(pickupDate).format('YYYY-MM-DD HH:mm:ss')
      });
    } else {
      this.setState({
        activeStep: activeStep + 1,
        lastActiveStep: Math.max(lastActiveStep, activeStep + 1),
      });
    }
  }
  onBack() {
    const { activeStep, lastActiveStep } = this.state;

    this.setState({
      activeStep: activeStep - 1,
      lastActiveStep: Math.max(lastActiveStep, activeStep - 1),
    });
  }
  onSelectAddress(address) {
    this.setState({address});
  }
  onSelectDate(date) {
    return moment(date).format('MMMM Do YYYY');
  }
  onPickupDateChange(event, date) {
    this.setState({pickupDate: date});
  }
  onPickupTimeChange(event, date) {
    this.setState({pickupTime: date});
  }
  onDropOffDateChange(event, date) {
    this.setState({dropOffDate: date});
  }
  onDropOffTimeChange(event, date) {
    this.setState({dropOffTime: date});
  }
  onNoteChange(event) {
    this.setState({note: event.target.value});
  }
	render() {
    const { creating } = this.props;
    const { activeStep, minPickDate, maxPickDate, 
      address, note, pickupDate, pickupTime, dropOffDate, dropOffTime } = this.state;

		return (
			<div className='flex flex-fill page' style={styles.page}>
			  <AppBar title='Create Order'
			    iconElementLeft={<IconButton onClick={this.onClosePage}><ArrowBack/></IconButton>}
          iconElementRight={creating?<CircularProgress size={0.5} color='white'/>:null}/>
        <div className='flex flex-fill'>
          <Stepper style={styles.flexFill} containerStyle={styles.flexFillScroll} horizontal={true} activeStep={this.state.activeStep}
            onStepHeaderTouch={creating?null:this.onSelectStep}
            updateCompletedStatus={this.updateCompletedSteps}
            createIcon={this.onCreateIcon}>

            <Step orderStepLabel='1' stepLabel='Select Address'>
              <AddressList selectable={true} selectItem={address}
                onItemClicked={this.onSelectAddress}/>
            </Step>

            <Step orderStepLabel='2' stepLabel='Select Date'>
              <div className='padding'>
                <Subheader>Pickup date:</Subheader>
                <div className='padding-horizontal'>
                  <DatePicker hintText='Date: please select' value={pickupDate}
                    disableYearSelection={true} defaultDate={minPickDate} minDate={minPickDate} maxDate={maxPickDate}
                    formatDate={this.onSelectDate} onChange={this.onPickupDateChange}/>
                  <TimePicker format='24hr' hintText='Time: please select' value={pickupTime}
                    onChange={this.onPickupTimeChange}/>
                </div>
                <Subheader>Drop off date:</Subheader>
                <div className='padding-horizontal'>
                  <DatePicker hintText='Date: please select (optional)' value={dropOffDate}
                    disableYearSelection={true}
                    formatDate={this.onSelectDate} onChange={this.onDropOffDateChange}/>
                  <TimePicker format='24hr' hintText='Time: please select (optional)' value={dropOffTime}
                    onChange={this.onDropOffTimeChange}/>
                </div>
              </div>
            </Step>

            <Step orderStepLabel='3' stepLabel='Preview & Submit'>
              <Paper className='padding margin' zDepth={1}>
                <p className='font-lg padding-bottom'>New Order Preview</p>
                {address&&<OrderProfile {...address} pickupTime={pickupTime}
                  pickupDate={pickupDate} dropOffDate={dropOffDate} dropOffTime={dropOffTime}/>}
                <TextField fullWidth={true} value={note} hintText='any special requirement?'
                  floatingLabelText='Note' disabled={creating} onChange={this.onNoteChange}/>
              </Paper>
            </Step>

          </Stepper>

          <Paper className='flex flex-row flex-space-between flex-align-center padding' zDepth={1}>
            {(activeStep > 0)?<FlatButton label='Back' onClick={this.onBack} disabled={creating}/>:' '}
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
  creating: PropTypes.bool,
  success: PropTypes.bool,
  createOrder: PropTypes.func.isRequired,
  refreshOrders: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired
};

const styles = {
  page: {
    overflow: 'hidden'
  },
  flexFill: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  flexFillScroll: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'auto'
  }
};

export default CreateOrderPage;