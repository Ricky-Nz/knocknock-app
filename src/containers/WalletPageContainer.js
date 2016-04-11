import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { } from '../actions';
import WalletPage from '../components/WalletPage';

const dataSelector = state => state.user;

const mapStateToProps = createSelector(
	dataSelector,
	(user) => ({user})
);

const mapActionToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapActionToProps)(WalletPage);