import { ACTION_GET_USER_PROFILE, ACTION_EDIT_USER_PROFILE,
	ACTION_EDIT_AVATAR, ACTION_LOGOUT } from '../actions';

export default function (user = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_EDIT_USER_PROFILE:
			if (data && data.status && data.result) {
				data = data.result;
			} else {
				return user;
			}
		case ACTION_GET_USER_PROFILE:
			if (!running && !error && data) {
				return {
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
		case ACTION_LOGOUT:
			return null;
		default:
			return user;
	}
}