import { ACTION_GET_DISTRICTS, ACTION_LOGOUT } from '../actions';

export default function (districts = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_DISTRICTS:
			if (!running && !error && data) {
				return data.map(item => ({
					id: item.id,
					districtCode: item.district_code,
					name: item.name,
					enabled: item.enabled,
					createdOn: item.created_on
				}));
			} else {
				return districts;
			}
		case ACTION_LOGOUT:
			return null;
		default:
			return districts;
	}
}