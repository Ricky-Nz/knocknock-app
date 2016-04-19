import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { searchProduct } from '../actions';
import Page from './Page';

const mapActionToProps = (dispatch) => ({
	searchProduct: (text) => {
		dispatch(searchProduct(text));
	}
});

export default connect(null, mapActionToProps)(Page);