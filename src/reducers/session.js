import { ACTION_LOGIN, ACTION_LOGOUT } from '../actions';

export default function (session = {
	tokenType: "Bearer",
	token: "cfec7eb1dde92dcbdcd894ec3b92af94ca45bea1b7a8370b743c1e7a56c010cf"
}, {type, running, error, data}) {
	switch(type) {
		case ACTION_LOGIN:
			if (!running&&!error&&data&&data.access_token&&data.token_type) {
				return {
					token: data.access_token,
					tokenType: data.token_type[0].toUpperCase() + data.token_type.slice(1),
					refreshToken: data.refresh_token,
					role: data.scope
				};
			} else {
				return session;
			}
		case ACTION_LOGOUT:
			return {};
		default:
			return session;
	}
}