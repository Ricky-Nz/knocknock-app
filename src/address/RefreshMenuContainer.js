import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { listAddresses } from './actions';
import RefreshMenu from './RefreshMenu';

const statusSelector = state => state.addressStatus.processing;

const mapStateToProps = createSelector(
	statusSelector,
	(processing) => ({processing})
);

const mapActionToProps = (dispatch) => ({
	listAddresses: () => {
		dispatch(listAddresses(true));
	}
});

export default connect(mapStateToProps, mapActionToProps)(RefreshMenu);