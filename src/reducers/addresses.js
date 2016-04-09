import { ACTION_GET_USER_ADDRESSES } from '../actions';

export default function (addresses = [], {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_USER_ADDRESSES:
			if (!running && !error && data) {
				return data.map(item => ({
					id: item.id,
					userId: item.user_id,
					name: item.name,
					address: item.address,
					postalCode: item.postal_code,
					type: item.apartment_type,
					districtId: item.district_id,
					note: item.note,
					createdOn: item.created_on,
					unitNumber: item.unit_number,
					contactNo: item.contact_no
				}));
			} else {
				return addresses;
			}
		default:
			return addresses;
	}
}