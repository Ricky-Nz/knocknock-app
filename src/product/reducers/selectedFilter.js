import { ACTION_FILETER_PRODUCT } from '../actions';

export default function (filter = 'ALL', {type, data}) {
	switch(type) {
		case ACTION_FILETER_PRODUCT:
			return data;
		default:
			return filter;
	}
}