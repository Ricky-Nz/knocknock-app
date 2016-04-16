import request from 'superagent';

const API_ROOT = 'http://api.knocknockapp.com/api';

export default function ({method, host, path, headers, params, form, body}) {
	return new Promise((resolve, reject) => {
		request(method, `${host||API_ROOT}/${path}`)
			.query(params||{})
			.set(headers||{})
			.send(form||body||{})
			.end((err, res) => {
				if (err || !res.ok) {
					reject({message: (res.body&&res.body.error&&JSON.stringify(res.body.error))||(err&&err.message)||'Request failed'});
				} else {
					resolve(res.body);
				}
			});
	});
}