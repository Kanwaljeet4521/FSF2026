function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index.html')
    .setTitle('FSF 2026 Dashboard');
}

function getDashboardData() {

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  const weeklySheet = spreadsheet.getSheetByName('2_Weekly_Tracking');
  const projectSheet = spreadsheet.getSheetByName('3_Project_Tracking');
  const leadershipSheet = spreadsheet.getSheetByName('4_Week8_Leadership');

  const weeklyData = weeklySheet.getDataRange().getValues();
  const projectData = projectSheet.getDataRange().getValues();
  const leadershipData = leadershipSheet.getDataRange().getValues();

  // Add this inside getDashboardData() if you see empty rows in your table
function convertToJson(data) {
  const headers = data[0];
  return data.slice(1)
    .filter(row => row[0] !== "") // Only include rows where the first column isn't empty
    .map(row => {
      let obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index];
      });
      return obj;
    });
}



  return {
    weekly: convertToJson(weeklyData),
    project: convertToJson(projectData),
    leadership: convertToJson(leadershipData)
  };
}
