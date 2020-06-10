export function clearSheet(
	sheet?: GoogleAppsScript.Spreadsheet.Sheet,
	startingRow: number = 1,
) {
	if (sheet == null) {
		sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
	}
	sheet
		.getRange(startingRow, 1, sheet.getMaxRows(), sheet.getMaxColumns())
		.clearContent();
}

export function getOrCreateSheet(sheetTitle: string, setActive?: boolean) {
	const activeSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
	const targetSheet =
		activeSpreadSheet
			.getSheets()
			.find((sheet) => sheet.getName() === sheetTitle) ??
		activeSpreadSheet.insertSheet(sheetTitle);

	if (
		setActive &&
		targetSheet.getSheetId() !== activeSpreadSheet.getActiveSheet().getSheetId()
	) {
		activeSpreadSheet.setActiveSheet(targetSheet);
	}
	return targetSheet;
}
