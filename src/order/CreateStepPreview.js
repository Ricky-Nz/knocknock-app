import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import BasicProfile from './BasicProfile';

class CreaateStepPreview extends Component {
	render() {
    const { penndingOrder, stepChangeNote } = this.props;

		return (
      <Paper className='padding margin' zDepth={1}>
        <p className='font-lg padding-bottom'>New Order Preview</p>
        {penndingOrder&&<BasicProfile {...penndingOrder} pickupTime={pickupTime}
          pickupDate={pickupDate}/>}
        <TextField fullWidth={true} value={note} hintText='any special requirement?'
          floatingLabelText='Note' disabled={creating} onChange={stepChangeNote}/>
      </Paper>
		);
	}
}

CreaateStepPreview.propTypes = {
	penndingOrder: PropTypes.object,
  stepChangeNote: PropTypes.func.isRequired
};

export default CreaateStepPreview;