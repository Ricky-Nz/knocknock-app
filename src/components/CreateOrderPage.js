import React, { Component, PropTypes } from 'react';
import Stepper from 'material-ui/lib/Stepper/Stepper';
import Step from 'material-ui/lib/Stepper/HorizontalStep';
import FontIcon from 'material-ui/lib/font-icon';
import RaisedButton from 'material-ui/lib/raised-button';
import FlatButton from 'material-ui/lib/flat-button';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import ArrowBack from 'material-ui/lib/svg-icons/navigation/arrow-back';

class CreateOrderPage extends Component {
	constructor(props) {
		super(props);
		this.state = {activeStep: 0, lastActiveStep: 0};
		this.onBack = this.onBack.bind(this);
		this.onSelectStep = this.onSelectStep.bind(this);
		this.updateCompletedSteps = this.updateCompletedSteps.bind(this);
		this.onContinue = this.onContinue.bind(this);
	}
	onBack() {
		this.context.router.pop();
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
      return (
        <FontIcon className='material-icons' style={{fontSize: 14}}>
          done
        </FontIcon>
      );
    }

    return <span>{step.props.orderStepLabel}</span>;
  }
  onContinue() {
    const { activeStep, lastActiveStep } = this.state;

    this.setState({
      activeStep: activeStep + 1,
      lastActiveStep: Math.max(lastActiveStep, activeStep + 1),
    });
  }
	render() {
		return (
			<div className='fillHeight page'>
			  <AppBar title='Create Order'
			    iconElementLeft={<IconButton onTouchTap={this.onBack}><ArrowBack/></IconButton>}/>
        <Stepper horizontal={true} activeStep={this.state.activeStep}
          onStepHeaderTouch={this.onSelectStep}
          updateCompletedStatus={this.updateCompletedSteps}
          createIcon={this.onCreateIcon}>
          <Step orderStepLabel='1' stepLabel='Step One'
            actions={[
              <RaisedButton key={0} label='Continue'
                primary={true} onClick={this.onContinue}/>,
              <FlatButton key={1} label='Cancel' />,
            ]}>
            <div style={{padding: 20}}>
              Please create an account, or login with your account details.
            </div>
          </Step>

          <Step orderStepLabel='2' stepLabel='Step Two'
            actions={[
              <RaisedButton key={0} label='Continue'
                primary={true} onClick={this.onContinue}/>,
              <FlatButton key={1} label="Cancel" />,
            ]}>
            <div style={{padding: 20}}>
              Please sign up for the event you wish to attend.
            </div>
          </Step>

          <Step orderStepLabel='3' stepLabel='Step Three'
            actions={[
              <RaisedButton key={0} label="Finish"
                primary={true} onClick={this.onContinue}/>,
              <FlatButton key={1} label="Cancel" />,
            ]}>
            <div style={{padding: 20}}>
              Please provide your credit card details.
            </div>
          </Step>
        </Stepper>	
			</div>
		);
	}
}

CreateOrderPage.contextTypes = {
  router: React.PropTypes.object
};

export default CreateOrderPage;