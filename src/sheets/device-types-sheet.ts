/**
 * This file is the place to have your Google Sheet's specific code.
 * It's better to isolate functions that interact with the sheet
 * in here and extract functions that just operate on data on
 * separate files.
 */
import * as deviceTypes from '../services/device-types-service';

export const headers = [
	'device type slug',
	'id',
	'name',
	'slug',
	'is_private',
] as const;

export const headerSortIndexes = headers.reduce<Dictionary<number>>(
	(acc, item, index) => {
		acc[item] = index;
		return acc;
	},
	{} as { [header in typeof headers[number]]: number },
);

export const coloredColumns: Dictionary<ReadonlyArray<typeof headers[number]>> =
	{
		yellow: ['device type slug'] as const,
	};

export const initHeaders = function () {
	const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	sheet
		.getRange(1, 1, 1, 5)
		.setValues([['device type slug', 'id', 'name', 'slug', 'is_private']]);
	const range = sheet
		.getRange(1, 1, sheet.getMaxRows())
		.setBackground('yellow');
	sheet
		.getRange(1, 1, 1, headers.length)
		.setValues([headers as Writable<typeof headers>])
		.setFontWeight('bold')
		.setWrap(true);
	sheet.setFrozenRows(1);
	sheet.setFrozenColumns(1);

	Object.keys(coloredColumns).forEach((color) => {
		const columns = coloredColumns[color];
		columns.forEach((column) => {
			sheet
				.getRange(1, headerSortIndexes[column] + 1, sheet.getMaxRows())
				.setBackground(color);
		});
	});

	range.getCell(2, 1).setValue('raspberrypi3');
};

export const getData = async function () {
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
