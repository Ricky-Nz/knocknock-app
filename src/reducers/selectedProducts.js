import { ACTION_SELECT_PRODUCT, ACTION_LOGOUT } from '../actions';

export default function (selected = {}, {type, data}) {
	switch(type) {
		case ACTION_SELECT_PRODUCT:
			return {...selected, [data]: !selected[data]};
		case ACTION_LOGOUT:
			return {};
		default:
			return selected;
	}
}