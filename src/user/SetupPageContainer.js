import { connect } from 'react-redux';
import { updateProfile } from '../actions';
import SetupPage from './SetupPage';

const mapActionToProps = (dispatch) => ({
	updateProfile: (args) => {
		dispatch(updateProfile(args));
	}
});

export default connect(null, mapActionToProps)(SetupPage);