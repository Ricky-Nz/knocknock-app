import fetch from '../../fetch';

export const ACTION_UPDATE_AVATAR = 'ACTION_UPDATE_AVATAR';

export function updateAvatar(fileContent) {
	return (dispatch, getState) => {
		const { session } = getState();

		runAction({
			dispatch,
			actionName: ACTION_UPDATE_AVATAR,
			method: 'POST',
			path: `users/me/photo`,
			headers: {
				'Authorization': `${session.tokenType} ${session.token}`
			},
			body: fileContent
		});
	};
}