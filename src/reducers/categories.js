import { ACTION_GET_PRODUCTS } from '../actions';

export default function (categories = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_PRODUCTS:
			if (!running && !error && data) {
				const rawCategories = data.map(({sub_category}) => sub_category&&{
					id: sub_category.id,
					categoryId: sub_category.category_id,
					nameEn: sub_category.name_en,
					nameCn: sub_category.name_ch,
					itemsCount: sub_category.items_count,
					createdOn: sub_category.created_on,
					imageUrl: sub_category.image_url,
					itemOrder: sub_category.item_order,
					category: sub_category.category&&{
						id: sub_category.category.id,
						nameEn: sub_category.category.name_en,
						nameCn: sub_category.category.name_ch,
						subCategoriesCount: sub_category.category.sub_categories_count,
						createdOn: sub_category.category.created_on
					}
				});
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
		default:
			return categories;
	}
}
