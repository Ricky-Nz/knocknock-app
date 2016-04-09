import doFetch from './doFetch';

export default function ({dispatch, actionName, method, host, path, headers, params, body}) {
	dispatch({
		type: actionName,
		running: true
	});

	doFetch({method, host, path, headers, params, body})
		.then(data => {
			dispatch({
				type: actionName,
				running: false,
				data
			});
		}, error => {
			dispatch({
				type: actionName,
				running: false,
				error
			});
		});
}