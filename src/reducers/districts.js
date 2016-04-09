import { ACTION_GET_DISTRICTS } from '../actions';

export default function (districts = [], {type, running, error, data}) {
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
		default:
			return districts;
	}
}