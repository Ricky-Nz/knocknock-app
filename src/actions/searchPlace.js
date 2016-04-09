import runAction from './runAction';

export const ACTION_SEARCH_PLACE = 'ACTION_SEARCH_PLACE';

export function searchPlace(postcode) {
	return (dispatch) => {
		runAction({
			dispatch,
			actionName: ACTION_SEARCH_PLACE,
			method: 'GET',
			host: 'http://maps.apps-bus.com/api',
			path: 'Places/SearchPlace',
			params: {
				query: postcode,
				page: 1
			}
		});
	};
}