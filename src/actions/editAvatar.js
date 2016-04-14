import runAction from './runAction';

export const ACTION_EDIT_AVATAR = 'ACTION_EDIT_AVATAR';

export function editAvatar(fileContent) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_EDIT_AVATAR,
			method: 'POST',
			path: `users/me/photo`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			},
			body: fileContent
		});
	};
}