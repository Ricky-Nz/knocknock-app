import { ACTION_SET_DEFAULT_NOTE } from '../actions';
import { saveDefaultNote, getDefaultNote } from '../../localStorage';

export default function (defaultNote = getDefaultNote(), {type, data}) {
	switch(type) {
		case ACTION_SET_DEFAULT_NOTE:
			saveDefaultNote(data);
			return Object.assign({}, data);
		default:
			return defaultNote;
	}
}