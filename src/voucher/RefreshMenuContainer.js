import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { listVouchers } from '../actions';
import RefreshMenu from './RefreshMenu';

const statusSelector = state => state.voucherStatus.processing;

const mapStateToProps = createSelector(
	statusSelector,
	(processing) => ({processing})
);

const mapActionToProps = (dispatch) => ({
	listVouchers: () => {
		dispatch(listVouchers(true));
	}
});

export default connect(mapStateToProps, mapActionToProps)(RefreshMenu);