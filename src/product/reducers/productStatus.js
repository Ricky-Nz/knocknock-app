import { ACTION_LIST_PRODUCTS } from '../actions';

export default function (status = {}, {type, running, error}) {
	switch(type) {
		case ACTION_LIST_PRODUCTS:
			if (running) {
				return {processing: true};
			} else {
				return {processing: false, processSuccess: !error}
			}
		default:
			return status;
	}
}