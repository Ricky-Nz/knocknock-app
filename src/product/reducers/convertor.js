export function convertProduct({
		id,
		sub_category_id,
		name_en,
		name_ch,
		wash_iron_price,
		dry_clean_price,
		iron_price,
		image_url,
		disabled
	}) {
	return {
		id,
		sub_category_id,
		name_en,
		name_ch,
		iron_price,
		wash_iron_price,
		dry_clean_price,
		image_url,
		disabled
	};
}

export function convertCategory({
		id,
		name_en,
		name_ch,
		image_url
	}) {
	return {
		id,
		name_en,
		name_ch,
		image_url
	};
}

