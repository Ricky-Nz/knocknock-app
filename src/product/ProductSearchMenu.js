import { connect } from 'react-redux';
import { searchProduct } from './actions';
import { SearchMenu } from '../app_widgets';

const mapActionToProps = (dispatch) => ({
	onSearchTextChange: (text) => {
		dispatch(searchProduct(text));
	}
});

export default connect(null, mapActionToProps)(SearchMenu);