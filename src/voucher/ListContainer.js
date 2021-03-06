import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { listVouchers } from '../actions';
import VoucherList from '../components/VoucherList';

const statusSelector = state => state.voucherStatus.processing;

const dataSelector = state => state.vouchers;

const mapStateToProps = createSelector(
	statusSelector,
	dataSelector,
	(processing, vouchers) => ({processing, vouchers})
);

const mapActionToProps = (dispatch) => ({
	listVouchers: () => {
		dispatch(listVouchers());
	}
});

export default connect(mapStateToProps, mapActionToProps)(VoucherList);