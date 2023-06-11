"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
/*********** ***************** */
// Using Instance Methods 
/*********** ***************** */
// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();
/*********** ***************** */
// Using Static Methods 
/*********** ***************** */
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
/*********** ***************** */
// Using Instance Methods 
/*********** ***************** */
// const summary = new Summary(
//     new WinAnalysis('Man United'),
// new ConsoleReport() 
//     new HtmlReport()
// )
// summary.buildAndPrintReport(matchReader.matches);
/*********** ***************** */
// Using Static Methods 
/*********** ***************** */
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Huddersfield');
summary.buildAndPrintReport(matchReader.matches);
