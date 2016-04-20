import { ACTION_TOPUP } from '../actions';

export default function (topUp = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_TOPUP:
			if (!running&&!error&&data&&data.status) {
				return {
					expressInfo: data.info,
					redirectUrl: data.redirect_url
				};
			} else {
				return null;
			}
		default:
			return topUp;
	}
}