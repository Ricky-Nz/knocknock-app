import { ACTION_GET_USER_PROFILE, ACTION_EDIT_USER_PROFILE,
	ACTION_EDIT_AVATAR } from '../actions';

export default function (user = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_USER_PROFILE:
		case ACTION_EDIT_USER_PROFILE:
			if (!running && !error && data && data.status && data.result) {
				const result = data.result;
				return {
					id: result.id,
					points: result.points,
					firstName: result.first_name,
					lastName: result.last_name,
					contactNo: result.contact_no,
					credit: result.credit,
					avatarSm: result.profile_image_url_small,
					avatarMd: result.profile_image_url_medium,
					avatarLg: result.profile_image_url_big,
					gender: result.gender,
					code: result.code,
					age: result.age,
					email: result.email
				};
			} else {
				return user;
			}
		case ACTION_EDIT_AVATAR:
			if (!running && !error && data && data.status && data.info) {
				return {
					...user,
					avatarSm: data.info.profile_image_url_small,
					avatarMd: data.info.profile_image_url_medium,
					avatarLg: data.info.profile_image_url_big
				};
			} else {
				return user;
			}
		default:
			return user;
	}
}