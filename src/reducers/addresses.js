import { ACTION_GET_USER_ADDRESSES, ACTION_CREATE_ADDRESS,
	ACTION_EDIT_ADDRESS } from '../actions';

export default function (addresses = null, {type, running, error, data}) {
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
		case ACTION_CREATE_ADDRESS:
			if (!running && !error && data && data.status === 'success' && data.result) {
				return [data.result, ...addresses];
			} else {
				return addresses;
			}
		case ACTION_EDIT_ADDRESS:
			if (!running && !error && data && data.status === 'success' && data.result) {
				const index = addresses.findIndex(address => address.id === data.result.id);
				if (index >= 0) {
					return [...addresses.slice(0, index), data.result, addresses.slice(index + 1)];
				} else {
					return addresses;
				}
			} else {
				return addresses;
			}
		default:
			return addresses;
	}
}