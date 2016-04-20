export function convert({
	id,
	title,
	value,
	expire_on,
	voucher_id,
	used
}) {
	return {
		id,
		title,
		value: !isNaN(value)&&Number(value).toFixed(2),
		expire_on,
		voucher_id,
		used
	};
}