import { ACTION_RESET_PASSWORD,
	ACTION_UPDATE_AVATAR, ACTION_UPDATE_PROFILE, ACTION_GET_PROFILE } from '../actions';
import { processStatus } from '../../utils';

export default function (status = {}, action) {
	switch(action.type) {
		case ACTION_RESET_PASSWORD:
		case ACTION_UPDATE_AVATAR:
		case ACTION_UPDATE_PROFILE:
		case ACTION_GET_PROFILE:
			return processStatus(action);
		default:
			return status;
	}
}