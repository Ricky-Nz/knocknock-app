import { ACTION_SEARCH_PLACE } from '../actions';

export default function (place = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_SEARCH_PLACE:
			if (!running && !error && data) {
				return data.Data;
			} else {
				return place;
			}
		default:
			return place;
	}
}