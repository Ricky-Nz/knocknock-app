import { ACTION_PRE_FORGOT_PASSWORD } from '../actions';

export default function (email = null, {type, data}) {
	switch(type) {
		case ACTION_PRE_FORGOT_PASSWORD:
			return {address: data};
		default:
			return email;
	}
}