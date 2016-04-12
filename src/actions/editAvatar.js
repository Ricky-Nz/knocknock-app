import runAction from './runAction';

export const ACTION_EDIT_AVATAR = 'ACTION_EDIT_AVATAR';

export function editAvatar(fileContent) {
	return (dispatch, getState) => {
		const { appState } = getState();

		runAction({
			dispatch,
			actionName: ACTION_EDIT_AVATAR,
			method: 'POST',
			path: `users/me/photo`,
			headers: {
				'Authorization': `${appState.tokenType} ${appState.token}`
			},
			body: fileContent
		});
	};
}