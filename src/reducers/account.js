import { ACTION_GET_ACCOUNT_INFO } from '../actions';

export default function (account = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_ACCOUNT_INFO:
			if (!running && !error && data) {
				return {
					...account,
					id: data.id,
					points: data.points,
					firstName: data.first_name,
					lastName: data.last_name,
					contactNo: data.contact_no,
					credit: data.credit,
					avatarSm: data.profile_image_url_small,
					avatarMd: data.profile_image_url_medium,
					avatarLg: data.profile_image_url_big,
					gender: data.gender,
					code: data.code,
					age: data.age,
					email: data.email
				};
			} else {
				return account;
			}
		default:
			return account;
	}
}