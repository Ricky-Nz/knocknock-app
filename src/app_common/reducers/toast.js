import { ACTION_TOAST_MESSAGE } from '../actions';

export default function (toast = {}, {type, data}) {
	switch(type) {
		case ACTION_TOAST_MESSAGE:
			return {message: data};
		default:
			return toast;
	}
}