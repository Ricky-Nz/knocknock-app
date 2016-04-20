import React, { Component, PropTypes } from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import IconArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconCheck from 'material-ui/svg-icons/action/check-circle';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import { AddressList } from '../containers';
import { ActionBar, EmptyView, RangeTimeChooser } from '../widgets';
import OrderProfile from './OrderProfile';
import AddressListItem from './AddressListItem';
import moment from 'moment';

class CreateOrderPage extends Component {
	constructor(props) {
		super(props);

    const minDate = moment().add(1, 'days').toDate();
    const maxDate = moment().add(15, 'days').toDate();

    this.state = {
      activeStep: props.location.query.express?2:0,
      address: props.defaultAddress||props.lastUsedAddress,
      note: props.defaultNote,
      pickupTime: props.defaultPickupTime,
      pickupDate: minDate,
      minPickDate: minDate,
      maxPickDate: maxDate,
      note: ''
    };

    this.onAddAddress = this.onAddAddress.bind(this);
		this.onSelectStep = this.onSelectStep.bind(this);
		this.onContinue = this.onContinue.bind(this);
    this.onBack = this.onBack.bind(this);
    this.onSelectAddress = this.onSelectAddress.bind(this);
    this.onSelectDate = this.onSelectDate.bind(this);
    this.onPickupDateChange = this.onPickupDateChange.bind(this);
    this.onPickupTimeChange = this.onPickupTimeChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
	}
  componentWillReceiveProps(nextProps) {
    if (!nextProps.creating&&this.props.creating&&nextProps.success) {
      this.props.refreshOrders();
      this.context.router.goBack();  
    } else if (nextProps.addresses&&nextProps.addresses[0]&&!this.state.address) {
      this.setState({address: nextProps.addresses[0]});
    }
  }
  onSelectStep(currentStep) {
    this.setState({
      activeStep: currentStep
    });
  }
  onAddAddress() {
    this.context.router.push('/address');
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
      const { address, pickupDate, pickupTime, note } = this.state;
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
  onPickupTimeChange(date) {
    this.setState({pickupTime: date});
  }
  onNoteChange(event) {
    this.setState({note: event.target.value});
  }
  renderStepContent({activeStep, minPickDate, maxPickDate, 
      address, note, pickupDate, pickupTime }, creating) {
    switch(activeStep) {
      case 0:
        return (
          <div>
            <Subheader>Selected</Subheader>
            {address?
              <Paper className='half-margin' zDepth={1}>
                <AddressListItem {...address} rightIconButton={<IconButton><IconCheck/></IconButton>}/>
              </Paper>:
              <div className='flex flex-center flex-align-center padding'>not selected</div>
            }
            <Subheader>All Addresses</Subheader>
            <AddressList paper={true} selectable={true} selectItem={address}
              onItemClicked={this.onSelectAddress}
              emptyView={<EmptyView text='you havnt add any addresses yet' actionNode={<RaisedButton label='Add Address' onClick={this.onAddAddress}/>}/>}/>
          </div>
        );
      case 1:
        return (
          <div>
            <Subheader>Pickup date:</Subheader>
            <div className='padding-horizontal'>
              <DatePicker textFieldStyle={styles.datePicker} hintText='Date: please select' value={pickupDate}
                disableYearSelection={true} defaultDate={minPickDate} minDate={minPickDate} maxDate={maxPickDate}
                formatDate={this.onSelectDate} onChange={this.onPickupDateChange}/>
              <RangeTimeChooser time={pickupTime} onTimeChange={this.onPickupTimeChange}/>
            </div>
          </div>
        );
      case 2:
        return (
          <Paper className='padding margin' zDepth={1}>
            <p className='font-lg padding-bottom'>New Order Preview</p>
            {address&&<OrderProfile {...address} pickupTime={pickupTime}
              pickupDate={pickupDate}/>}
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
        <ActionBar title='Create Order' running={creating} leftIcon={<IconArrowBack/>}
          onLeftMenuClicked={this.context.router.goBack}/>
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
  lastUsedAddress: PropTypes.object,
  creating: PropTypes.bool,
  success: PropTypes.bool,
  createOrder: PropTypes.func.isRequired,
  refreshOrders: PropTypes.func.isRequired,
  recordLastUsedAddress: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired,
  addresses: PropTypes.array
};

const styles = {
  page: {
    overflow: 'hidden'
  },
  datePicker: {
    paddingLeft: 16
  }
};

export default CreateOrderPage;