export function convertCompactOrder({
		id,
		pickup_district_id,
		pickup_address,
		pickup_postal_code,
		created_on,
		pickup_date,
		pickup_time,
		drop_off_date,
		drop_off_time,
		paid,
		to_pay_price,
		order_status
	}) {
	return {
		id,
		pickup_district_id,
		pickup_address,
		pickup_postal_code,
		created_on,
		pickup_date,
		pickup_time,
		drop_off_date,
		drop_off_time,
		paid,
		to_pay_price,
		status: order_status.status
	};
}

function convertOrderItem({
		order_id,
		item_id,
		quantity,
		price,
		item
	}) {
	return {
		order_id,
		item_id,
		quantity,
		price,
		item: item&&convertProduct(item)
	};
}

export function convertDetailOrder({
		id,
		pickup_district_id,
		pickup_address,
		pickup_postal_code,
		pickup_contact_no,
		created_on,
		pickup_date,
		pickup_time,
		paid,
		payment_mode,
		to_pay_price,
		qr_code_url,
		order_status,
		order_details
	}) {
	return {
		id,
		pickup_district_id,
		pickup_address,
		pickup_postal_code,
		pickup_contact_no,
		created_on,
		pickup_date,
		pickup_time,
		paid,
		payment_mode,
		to_pay_price,
		qr_code_url,
		status: order_status.status,
		order_details: order_details&&order_details.map(convertOrderItem)
	};
}

export function convertProduct({
		id,
		sub_category_id,
		name_en,
		name_ch,
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

export function convertAddress({
		id,
		user_id,
		address,
		postal_code,
		district_id,
		unit_number,
		contact_no
	}) {
	return {
		id,
		user_id,
		address,
		postal_code,
		district_id,
		unit_number,
		contact_no
	};
}

