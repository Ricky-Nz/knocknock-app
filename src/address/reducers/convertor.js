export function convertDetail({
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

export function convertCompact({
		id,
		address,
		postal_code,
		unit_number,
		contact_no
	}) {
	return {
		id,
		address,
		postal_code,
		unit_number,
		contact_no
	};
}