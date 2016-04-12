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
import AddressListContainer from '../containers/AddressListContainer';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker/time-picker';
import Subheader from 'material-ui/lib/Subheader';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import IconPlace from 'material-ui/lib/svg-icons/maps/place';
import IconLocalPhone from 'material-ui/lib/svg-icons/maps/local-phone';
import IconAccessTime from 'material-ui/lib/svg-icons/device/access-time';
import { TimeDisplay, IconParagraph } from '../widgets';
import moment from 'moment';

class CreateOrderPage extends Component {
	constructor(props) {
		super(props);
		this.state = {activeStep: 0, lastActiveStep: 0, note: ''};
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
        pickupPostalCode: address.postialCode,
        pickupAddress: address.address,
        expressOrder: true,
        pickupDate
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
    const { address, note, pickupDate, pickupTime, dropOffDate, dropOffTime } = this.state;

		return (
			<div className='fillHeight page' style={styles.page}>
			  <AppBar title='Create Order'
			    iconElementLeft={<IconButton onClick={this.onClosePage}><ArrowBack/></IconButton>}/>
        <div className='fillHeight' style={styles.relativeContainer}>
          <Stepper containerStyle={styles.fill} horizontal={true} activeStep={this.state.activeStep}
            onStepHeaderTouch={creating?null:this.onSelectStep}
            updateCompletedStatus={this.updateCompletedSteps}
            createIcon={this.onCreateIcon}>

            <Step orderStepLabel='1' stepLabel='Select Address'>
              <AddressListContainer selectable={true} selectItem={address}
                onItemClicked={this.onSelectAddress}/>
            </Step>

            <Step orderStepLabel='2' stepLabel='Select Date'>
              <div style={styles.stepContainer}>
                <Subheader>Pickup date:</Subheader>
                <DatePicker hintText='Date: please select (optional)' value={pickupDate}
                  formatDate={this.onSelectDate} onChange={this.onPickupDateChange}/>
                <TimePicker format='24hr' hintText='Time: please select' value={pickupTime}
                  onChange={this.onPickupTimeChange}/>
                <Subheader>Drop off date:</Subheader>
                <DatePicker hintText='Date: please select (optional)' value={dropOffDate}
                  formatDate={this.onSelectDate} onChange={this.onDropOffDateChange}/>
                <TimePicker format='24hr' hintText='Time: please select' value={dropOffTime}
                  onChange={this.onDropOffTimeChange}/>
              </div>
            </Step>

            <Step orderStepLabel='3' stepLabel='Preview & Submit'>
              <Paper style={styles.pagerContainer} zDepth={1}>
                <Subheader>New Order Preview</Subheader>
                <IconParagraph icon={<IconPlace/>}>
                  Address: {address&&address.address}
                </IconParagraph>
                <IconParagraph icon={<IconLocalPhone/>}>
                  Contact: {address&&address.contactNo}
                </IconParagraph>
                <IconParagraph icon={<IconAccessTime/>}>
                  Pickup Time: <TimeDisplay>{pickupTime}</TimeDisplay> <TimeDisplay format='MMMM Do YYYY'>{pickupDate}</TimeDisplay>
                </IconParagraph>
                {dropOffDate&&
                  <IconParagraph icon={<IconAccessTime/>}>
                    Pickup Time: {dropOffTime&&<TimeDisplay>{pickupTime}</TimeDisplay>} <TimeDisplay format='MMMM Do YYYY'>{dropOffDate}</TimeDisplay>
                  </IconParagraph>
                }
                <TextField fullWidth={true} value={note} hintText='note: any special requirement?'
                  onChange={this.onNoteChange}/>
              </Paper>
            </Step>

          </Stepper>

          <div className='flex flex-row flex-align-center' style={styles.bottombar}>
            <FlatButton label='Back' onClick={this.onBack}/>,
            <RaisedButton label='Continue' primary={true} onClick={this.onContinue}/>
          </div>
        </div>
			</div>
		);
	}
}

CreateOrderPage.contextTypes = {
  router: React.PropTypes.object
};

CreateOrderPage.propTypes = {
  creating: PropTypes.func.isRequired,
  createOrder: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired
};

const styles = {
  page: {
    overflow: 'hidden'
  },
  relativeContainer: {
    position: 'relative'
  },
  stepContainer: {
    padding: '16px'
  },
  pagerContainer: {
    padding: '16px',
    margin: '16px'
  },
  fill: {
    height: '100%',
    overflow: 'auto'
  },
  bottombar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '16px'
  }
};

export default CreateOrderPage;