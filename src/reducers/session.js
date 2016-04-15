import { ACTION_LOGIN, ACTION_LOGOUT } from '../actions';
import { saveSession, getSession, clearSession } from './localStorage';

export default function (session = getSession(), {type, running, error, data}) {
	switch(type) {
		case ACTION_LOGIN:
			if (!running&&!error&&data&&data.access_token&&data.token_type) {
				const newSession = {
					token: data.access_token,
					tokenType: data.token_type[0].toUpperCase() + data.token_type.slice(1),
					refreshToken: data.refresh_token,
					role: data.scope
				};
				saveSession(newSession);
				return newSession;
			} else {
				return session;
			}
		case ACTION_LOGOUT:
			clearSession();
			return null;
		default:
			return session;
	}
}