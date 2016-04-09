import { ACTION_GET_ORDERS, ACTION_CREATE_ORDER } from '../actions';

export default function (orders = [], {type, running, error, data}) {
	switch(type) {
		// case ACTION_CREATE_ORDER:
		// 	if (!running && !error && data) {
		// 		return [ ...orders]
		// 	} else {
		// 		return orders;
		// 	}
		case ACTION_GET_ORDERS:
			if (!running && !error && data) {
				return data.map(item => ({
					id: item.id,
					statusId: item.order_status_id,
					recurringOrderId: item.recurring_order_id,
					pickupWorkerId: item.pickup_worker_id,
					dropOffWorkerId: item.drop_off_worker_id,
					userId: item.user_id,
					dropOffDistrictId: item.drop_off_district_id,
					pickupDistrictId: item.pickup_district_id,
					factoryId: item.factory_id,
					description: item.description,
					lazyOrder: item.lazy_order,
					expressOrder: item.express_order,
					totalPrice: item.total_price,
					pickupAddress: item.pickup_address,
					pickupPostalCode: item.pickup_postal_code,
					pickupApartmentType: item.pickup_apartment_type,
					dropOffAddress: item.drop_off_address,
					dropOffPostalCode: item.drop_off_postal_code,
					dropOffApartmentType: item.drop_off_apartment_type,
					speedRating: item.speed_rating,
					attitudeRating: item.attitude_rating,
					createdOn: item.created_on,
					pickupDate: item.pickup_date,
					pickupTime: item.pickup_time,
					dropOffDate: item.drop_off_date,
					dropOffTime: item.drop_off_time,
					review: item.review,
					pickupChanged: item.pickup_changed,
					deliverChanged: item.deliver_changed,
					paypalRefNo: item.paypal_ref_no,
					paid: item.paid,
					payLater: item.pay_later,
					paymentMode: item.payment_mode,
					toPayPrice: item.to_pay_price,
					voucherId: item.voucher_id,
					free: item.free,
					workerChecked: item.worker_checked,
					userChecked: item.user_checked,
					orderSourceId: item.order_source_id,
					qrCodeUrl: item.qr_code_url,
					factoryWorkerId: item.factory_worker_id,
					factoryReceivedDate: item.factory_received_date,
					factoryCompletedDate: item.factory_completed_date,
					isMerged: item.is_merged,
					signatureUrl: item.signature_url,
					mergedOrderIds: item.merged_order_ids,
					isImported: item.is_imported,
					isMergable: item.is_mergable,
					orderNumber: item.order_number,
					pickupContactNo: item.pickup_contact_no,
					dropOffContactNo: item.drop_off_contact_no,
					promoCodeId: item.promo_code_id,
					promoDiscount: item.promo_discount,
					voucherDiscount: item.voucher_discount,
					orderStatus: {
						id: item.order_status.id,
						status: item.order_status.status,
						stage: item.order_status.stage
					},
					orderImages: item.order_images
				}));
			} else {
				return orders;
			}
		default:
			return orders;
	}
}