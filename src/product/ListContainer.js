import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { showProduct } from './actions';
import List from './List';

const mapActionToProps = (dispatch) => ({
	showProduct: (text) => {
		dispatch(showProduct(text));
	}
});

export default connect(null, mapActionToProps)(List);