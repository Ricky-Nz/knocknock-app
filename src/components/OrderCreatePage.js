import React, { Component, PropTypes } from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconDone from 'material-ui/svg-icons/action/done';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import { AddressList } from '../containers';
import OrderProfile from './OrderProfile';
import moment from 'moment';

class CreateOrderPage extends Component {
	constructor(props) {
		super(props);

    const minDate = moment().add(1, 'days').toDate();
    const maxDate = moment().add(15, 'days').toDate();

    if (props.location.query.express) {
      this.state = {
        activeStep: 2,
        address: props.defaultAddress,
        note: props.defaultNote,
        pickupTime: props.defaultPickupTime,
        pickupDate: minDate,
        minPickDate: minDate,
        maxPickDate: maxDate
      };
    } else {
      this.state = {
        activeStep: 0,
        note: '',
        pickupDate: minDate,
        minPickDate: minDate,
        maxPickDate: maxDate
      };
    }
		this.onClosePage = this.onClosePage.bind(this);
		this.onSelectStep = this.onSelectStep.bind(this);
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
    this.setState({
      activeStep: currentStep
    });
  }
  onContinue() {
    const { activeStep } = this.state;

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
        activeStep: activeStep + 1
      });
    }
  }
  onBack() {
    this.setState({
      activeStep: this.state.activeStep - 1
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
  renderStepContent({activeStep, minPickDate, maxPickDate, 
      address, note, pickupDate, pickupTime, dropOffDate, dropOffTime}, creating) {
    switch(activeStep) {
      case 0:
        return (
          <AddressList paper={true} selectable={true} selectItem={address}
            onItemClicked={this.onSelectAddress}/>
        );
      case 1:
        return (
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
        );
      case 2:
        return (
          <Paper className='padding margin' zDepth={1}>
            <p className='font-lg padding-bottom'>New Order Preview</p>
            {address&&<OrderProfile {...address} pickupTime={pickupTime}
              pickupDate={pickupDate} dropOffDate={dropOffDate} dropOffTime={dropOffTime}/>}
            <TextField fullWidth={true} value={note} hintText='any special requirement?'
              floatingLabelText='Note' disabled={creating} onChange={this.onNoteChange}/>
          </Paper>
        );
    }
  }
	render() {
    const { creating } = this.props;
    const { activeStep } = this.state;

		return (
			<div className='flex flex-fill page' style={styles.page}>
			  <AppBar title='Create Order'
			    iconElementLeft={<IconButton onClick={this.onClosePage}><ArrowBack/></IconButton>}
          iconElementRight={creating?<CircularProgress size={0.5} color='white'/>:null}/>
        <div className='flex flex-fill'>
          <Stepper horizontal={true} activeStep={this.state.activeStep}
            onStepHeaderTouch={creating?null:this.onSelectStep}>
            <Step><StepLabel>Pick Address</StepLabel></Step>
            <Step><StepLabel>Pick Date</StepLabel></Step>
            <Step><StepLabel>Submit</StepLabel></Step>
          </Stepper>
          <div className='flex flex-fill'>
            {this.renderStepContent(this.state, creating)}
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
  defaultAddress: PropTypes.object,
  defaultPickupTime: PropTypes.any,
  defaultNote: PropTypes.string,
  creating: PropTypes.bool,
  success: PropTypes.bool,
  createOrder: PropTypes.func.isRequired,
  refreshOrders: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired
};

const styles = {
  page: {
    overflow: 'hidden'
  }
};

export default CreateOrderPage;