import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { stepSelectAddress } from '../actions';
import CreateStepPickAddress from './CreateStepPickAddress';

const defaultAddressSelector = state => state.penndingOrder&&state.penndingOrder.address;

const mapStateToProps = createSelector(
	defaultAddressSelector,
	(selectAddress) => ({selectAddress})
);

const mapActionToProps = (dispatch, props) => ({
	stepSelectAddress: (address) => {
		dispatch(stepSelectAddress(address));
	}
});

export default connect(mapStateToProps, mapActionToProps)(CreateStepPickAddress);