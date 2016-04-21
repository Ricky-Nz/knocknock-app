import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import DatePicker from 'material-ui/DatePicker';
import { RangeTimeChooser } from '../app_widgets';
import moment from 'moment';

class CreaateStepPickTime extends Component {
  onPickupDate = (event, date) => {
    this.stepSelectPickupDate(date);
  }
  onFormatDate = (date) => {
    return moment(date).format('MMMM Do YYYY');
  }
	render() {
    const { pickupDate, pickupTime, stepSelectPickupTime } = this.props;
    const minDate = moment().add(1, 'days').toDate();
    const maxDate = moment().add(14, 'days').toDate();

		return (
      <div>
        <Subheader>Pickup date:</Subheader>
        <div className='padding-horizontal'>
          <DatePicker textFieldStyle={styles.datePicker} hintText='Date: please select' value={pickupDate}
            disableYearSelection={true} defaultDate={minDate} minDate={minDate} maxDate={maxDate}
            formatDate={this.onFormatDate} onChange={this.onPickupDate}/>
          <RangeTimeChooser time={pickupTime} onTimeChange={stepSelectPickupTime}/>
        </div>
      </div>
		);
	}
}

CreaateStepPickTime.propTypes = {
	pickupDate: PropTypes.any,
  pickupTime: PropTypes.any,
  stepSelectPickupDate: PropTypes.func.isRequired,
  stepSelectPickupTime: PropTypes.func.isRequired
};

const styles = {
  datePicker: {
    paddingLeft: 16
  }
};

export default CreaateStepPickTime;