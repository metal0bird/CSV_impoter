

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('CSV Importer')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function importCSVData(csvData, selectedColumns, appendData) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();
  var values = range.getValues();
  var numRows = range.getNumRows();
  var numCols = range.getNumColumns();
  var columnHeaders = values[0]; // Assuming the first row contains headers
  
  var rowsToAppend = [];
  var startIndex = 1; // Start index for data rows (skip headers)

  // If overwriting is selected, clear the existing data except for headers
  if (!appendData) {
    sheet.deleteRows(startIndex, numRows - 1);
    startIndex = 1;
  }

  for (var i = startIndex; i < numRows; i++) {
    var rowData = [];
    for (var j = 0; j < numCols; j++) {
      rowData.push(values[i][j]);
    }
    rowsToAppend.push(rowData);
  }

  for (var i = 1; i < selectedColumns.length; i++) {
    var columnIndex = selectedColumns[i];
    columnHeaders[columnIndex] = columnHeaders[columnIndex];
  }

  var importedHeaders = selectedColumns.map(function(index) {
    return columnHeaders[index];
  });
  rowsToAppend.unshift(importedHeaders);

  var importedData = csvData.split('\n').map(function(row) {
    return row.split(',').filter(function(_, index) {
      return selectedColumns.indexOf(index) !== -1;
    });
  });

  rowsToAppend = rowsToAppend.concat(importedData);

  sheet.getRange(1, 1, rowsToAppend.length, rowsToAppend[0].length).setValues(rowsToAppend);

  return 'CSV import completed successfully!';
}