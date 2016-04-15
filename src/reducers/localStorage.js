function isStorageSupport() {
	return typeof(Storage) !== 'undefined';
}

function set(key, value) {
	if (!isStorageSupport()) return;

	localStorage.setItem(key, JSON.stringify(value));
}

function get(key) {
	if (!isStorageSupport()) return;

	const data = localStorage[key];
	if (data) {
		return JSON.parse(data);
	} else {
		return null;
	}
}

function remove(key) {
	localStorage.removeItem(key);
}

export function saveSession(session) {
	set('LOCAL_SESSION', session);
}

export function getSession() {
	return get('LOCAL_SESSION');
}

export function clearSession() {
	remove('LOCAL_SESSION');
}

export function saveDefaultAddress(address) {
	set('LOCAL_ADDRESS', address);
}

export function getDefaultAddress() {
	return get('LOCAL_ADDRESS');
}

export function saveDefaultPickupTime(pickupTime) {
	set('LOCAL_PICKUP_TIME', pickupTime);
}

export function getDefaultPickupTime() {
	const data = get('LOCAL_PICKUP_TIME');
	if (data) {
		return new Date(data);
	} else {
		return data;
	}
}

export function saveDefaultNote(note) {
	set('LOCAL_NOTE', note);
}

export function getDefaultNote() {
	return get('LOCAL_NOTE');
}

