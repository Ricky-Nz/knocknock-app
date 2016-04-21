import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { stepSelectPickupDate, stepSelectPickupTime } from '../actions';
import CreateStepPickTime from './CreateStepPickTime';

const pickupDateSelector = state => state.penndingOrder&&state.penndingOrder.pickupDate;

const pickupTimeSelector = state => state.penndingOrder&&state.penndingOrder.pickupTime;

const mapStateToProps = createSelector(
	pickupDateSelector,
	pickupTimeSelector,
	(pickupDate, pickupTime) => ({pickupDate, pickupTime})
);

const mapActionToProps = (dispatch) => ({
	stepSelectPickupDate: (date) => {
		dispatch(stepSelectPickupDate(date));
	},
	stepSelectPickupTime: (time) => {
		dispatch(stepSelectPickupTime(time));
	}
});

export default connect(mapStateToProps, mapActionToProps)(CreateStepPickTime);