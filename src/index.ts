import * as deviceTypesService from './services/device-types-service';
import * as deviceTypesSheet from './sheets/device-types-sheet';
import { clearSheet } from './sheet-utils';

global.getDeviceTypeProp = deviceTypesService.getDeviceTypeProp;

global.initHeaders = function () {
	deviceTypesSheet.initHeaders();
};

global.initSheet = function () {
	clearSheet();
	global.initHeaders();
};

global.getDetails = async function () {
	await deviceTypesSheet.getData();
};

global.onOpen = function () {
	SpreadsheetApp.getUi()
		.createMenu('Custom Actions')
		.addItem('Init headers', 'initHeaders')
		.addItem('Init sheet', 'initSheet')
		.addItem('Get details', 'getDetails')
		.addToUi();
};
