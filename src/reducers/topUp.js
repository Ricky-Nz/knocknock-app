import { ACTION_TOPUP, ACTION_LOGOUT } from '../actions';

export default function (topUp = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_TOPUP:
			if (!running && !error && data && data.status) {
				return {
					info: data.info,
					redirectUrl: data.redirect_url
				};
			} else {
				return null;
			}
		case ACTION_LOGOUT:
			return null;
		default:
			return topUp;
	}
}