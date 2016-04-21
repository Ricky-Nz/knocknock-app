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
		status: order_status.status,
		status_step: order_status.step
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

function convertOrderItem({
		order_id,
		item_id,
		quantity,
		price,
		laundry_type,
		item
	}) {
	return {
		order_id,
		item_id,
		quantity,
		price,
		laundry_type,
		item: item&&convertProduct(item)
	};
}