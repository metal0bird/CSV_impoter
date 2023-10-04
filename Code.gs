

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('CSV Importer')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function importCSVData(csvData, selectedColumns) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var rows = csvData.split('\n');
  var dataToAppend = [];
  var columnHeaders = rows[0].split(','); // Assuming the first row contains headers

  for (var i = 1; i < rows.length; i++) {
    var rowData = rows[i].split(',');
    var selectedRowData = [];
    
    for (var j = 0; j < selectedColumns.length; j++) {
      var columnIndex = selectedColumns[j];
      selectedRowData.push(rowData[columnIndex]);
    }
    
    dataToAppend.push(selectedRowData);
  }
  
  // Add headers to the data
  dataToAppend.unshift(selectedColumns.map(function(index) { return columnHeaders[index]; }));
  
  sheet.getRange(sheet.getLastRow() + 1, 1, dataToAppend.length, dataToAppend[0].length).setValues(dataToAppend);

  return 'CSV import completed successfully!';
}