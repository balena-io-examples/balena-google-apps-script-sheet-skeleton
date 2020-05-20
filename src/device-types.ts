import { getPine } from './pine';

export async function getDeviceType(slug: string) {
	const pine = getPine();
	const deviceTypes = (await pine.get({
		resource: 'device_type',
		options: {
			$filter: {
				slug,
			},
		},
	})) as AnyObject[];
	return deviceTypes[0];
}

export async function getDeviceTypeProp(slug: string, prop: string) {
	const pine = getPine();
	const deviceTypes = (await pine.get({
		resource: 'device_type',
		options: {
			$select: [prop],
			$filter: {
				slug,
			},
		},
	})) as AnyObject[];
	return deviceTypes[0][prop];
}
