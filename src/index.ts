import * as deviceTypesSheet from './sheets/device-types-sheet';
import { clearSheet } from './sheet-utils';

export { getDeviceTypeProp } from './services/device-types-service';

export function initHeaders() {
	deviceTypesSheet.initHeaders();
}

export function initSheet() {
	clearSheet();
	global.initHeaders();
}

export async function getDetails() {
	await deviceTypesSheet.getData();
}

export function onOpen() {
	SpreadsheetApp.getUi()
		.createMenu('Custom Actions')
		.addItem('Init headers', 'initHeaders')
		.addItem('Init sheet', 'initSheet')
		.addItem('Get details', 'getDetails')
		.addToUi();
}
