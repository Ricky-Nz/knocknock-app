import doFetch from './doFetch';

export default function ({dispatch, actionName, ...args}) {
	dispatch({
		type: actionName,
		running: true
	});

	doFetch(args)
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