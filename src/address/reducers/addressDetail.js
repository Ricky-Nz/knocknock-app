import { ACTION_GET_ADDRESS, ACTION_EDIT_ADDRESS } from '../actions';
import { convertDetail } from './convertor';

export default function (address = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_ADDRESS:
			if (!running&&!error&&data&&data.length===1) {
				return convertDetail(data[0]);
			} else {
				return address;
			}
		case ACTION_EDIT_ADDRESS:
			if (!running&&!error&&data&&data.status&&data.result) {
				return convertDetail(data.result);
			} else {
				return address;
			}
		default:
			return address;
	}
}