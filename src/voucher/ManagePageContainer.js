import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getVouchers } from '../actions';
import VoucherManagePage from '../components/VoucherManagePage';

const loadingStateSelector = state => state.actionState.loadingVouchers;

const mapStateToProps = createSelector(
	loadingStateSelector,
	(loading) => ({loading})
);

const mapActionToProps = (dispatch) => ({
	getVouchers: () => {
		dispatch(getVouchers(true));
	}
});

export default connect(mapStateToProps, mapActionToProps)(VoucherManagePage);