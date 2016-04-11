import { ACTION_GET_PRODUCTS } from '../actions';

export default function (products = null, {type, running, error, data}) {
	switch(type) {
		case ACTION_GET_PRODUCTS:
			if (!running && !error && data) {
				return data.map(item => ({
					id: item.id,
					subCategoryId: item.sub_category_id,
					nameEn: item.name_en,
					nameCn: item.name_ch,
					price: item.wash_iron_price,
					dryPrice: item.dry_clean_price,
					ironPrice: item.iron_price,
					discountPrice: item.discount_wash_iron_price,
					discountDryPrice: item.discount_dry_clean_price,
					discountIronPrice: item.discount_iron_price,
					haveDiscountDryPrice: item.have_discount_dry_clean_price,
					haveDiscountPrice: item.have_discount_wash_iron_price,
					haveDiscountIronPrice: item.have_discount_iron_price,
					imageUrl: item.image_url,
					createdOn: item.created_on,
					disabled: item.disabled,
					itemOrder: item.item_order
				}));
			} else {
				return products;
			}
		default:
			return products;
	}
}
