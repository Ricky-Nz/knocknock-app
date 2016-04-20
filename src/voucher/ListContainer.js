import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getVouchers } from '../actions';
import VoucherList from '../components/VoucherList';

const loadingStateSelector = state => state.actionState.loadingVouchers;

const dataSelector = state => state.vouchers;

const mapStateToProps = createSelector(
	loadingStateSelector,
	dataSelector,
	(loading, vouchers) => ({loading, vouchers})
);

const mapActionToProps = (dispatch) => ({
	getVouchers: () => {
		dispatch(getVouchers());
	}
});

export default connect(mapStateToProps, mapActionToProps)(VoucherList);