export const ACTION_STEP_CHANGE_NOTE = 'ACTION_STEP_CHANGE_NOTE';

export function stepChangeNote(note) {
	return {
		type: ACTION_STEP_CHANGE_NOTE,
		data: note
	};
}