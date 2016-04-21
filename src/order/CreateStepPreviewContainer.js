import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { stepChangeNote } from '../actions';
import CreateStepPickTime from './CreateStepPickTime';

const penndingOrderSelector = state => state.penndingOrder;

const mapStateToProps = createSelector(
	penndingOrderSelector,
	(penndingOrder) => ({penndingOrder})
);

const mapActionToProps = (dispatch) => ({
	stepChangeNote: (date) => {
		dispatch(stepChangeNote(date));
	}
});

export default connect(mapStateToProps, mapActionToProps)(CreateStepPickTime);