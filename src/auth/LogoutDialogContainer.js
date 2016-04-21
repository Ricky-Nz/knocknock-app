import { connect } from 'react-redux';
import { logOut } from './actions';
import LogoutDialog from './LogoutDialog';

const mapActionToProps = (dispatch) => ({
	logOut: () => {
		dispatch(logOut());
	}
});

export default connect(null, mapActionToProps)(LogoutDialog);