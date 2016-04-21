import { ACTION_LIST_PRODUCTS, ACTION_LOGOUT } from '../actions';
import { convertCategory } from './convertor';

export default function (categories = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_LIST_PRODUCTS:
			if (!running&&!error&&data) {
				const rawCategories = data.map(({sub_category}) => convertCategory(sub_category));
				
				let record = {};
				return rawCategories.filter(value => {
					if (record[value.id]) {
						return false;
					} else {
						record[value.id] = value.id;
						return true
					}
				});
			} else {
				return categories;
			}
		case ACTION_LOGOUT:
			return null;
		default:
			return categories;
	}
}
