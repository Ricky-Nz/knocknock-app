export const ACTION_RECORD_DEFAULT_NOTE = 'ACTION_RECORD_DEFAULT_NOTE';

export function recordDefaultNote(note) {
	return {
		type: ACTION_RECORD_DEFAULT_NOTE,
		data: note
	};
}



