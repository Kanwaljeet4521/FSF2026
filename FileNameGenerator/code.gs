function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index.html')
    .setTitle('FSF File Naming Tool');
}
