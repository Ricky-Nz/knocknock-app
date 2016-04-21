import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { topUpByPaypal } from './actions';
import WalletPage from './WalletPage';

const statusSelector = state => state.paymentStatus.processing;

const userSelector = state => state.user;

const mapStateToProps = createSelector(
	statusSelector,
	userSelector,
	(processing, user) => ({processing, user})
);

const mapActionToProps = (dispatch) => ({
	topUpByPaypal: (amount) => {
		dispatch(topUpByPaypal(amount));
	}
});

export default connect(mapStateToProps, mapActionToProps)(WalletPage);