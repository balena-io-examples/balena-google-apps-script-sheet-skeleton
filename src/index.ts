import * as deviceTypes from './device-types';

global.getDeviceTypeProp = deviceTypes.getDeviceTypeProp;

function clearAll() {
	const activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	activeSheet
		.getRange(1, 1, activeSheet.getMaxRows(), activeSheet.getMaxColumns())
		.clearContent();
}

global.initHeaders = function () {
	const activeSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	activeSheet
		.getRange(1, 1, 1, 5)
		.setValues([['device type slug', 'id', 'name', 'slug', 'is_private']]);
	const range = activeSheet
		.getRange(1, 1, activeSheet.getMaxRows())
		.setBackground('yellow');
	range.getCell(2, 1).setValue('raspberrypi3');
};

global.initSheet = function () {
	clearAll();
	global.initHeaders();
};

global.getDetails = async function () {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	sheet
		.getRange(2, 2, sheet.getMaxRows(), sheet.getMaxColumns())
		.clearContent();

	const inputRange = sheet.getRange(2, 1, sheet.getMaxColumns());

	await Promise.all(
		inputRange.getValues().map(async ([cellValue], i) => {
			const resultRange = sheet.getRange(inputRange.getRow() + i, 2, 1, 4);

			try {
				if (!cellValue) {
					return;
				}
				const dt = await deviceTypes.getDeviceType(cellValue);
				if (!dt) {
					return;
				}
				const newValues = ['' + dt.id, dt.name, dt.slug, '' + dt.is_private];
				resultRange.setValues([newValues]);
			} catch (err) {
				resultRange.setValues([['Error', err.message]]);
			}
		}),
	);
};

global.onOpen = function () {
	SpreadsheetApp.getUi()
		.createMenu('Custom Actions')
		.addItem('Init headers', 'initHeaders')
		.addItem('Init sheet', 'initSheet')
		.addItem('Get details', 'getDetails')
		.addToUi();
};
