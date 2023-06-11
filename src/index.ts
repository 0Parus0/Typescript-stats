import { CsvFileReader } from './CsvFileReader';
import {MatchReader} from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

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

const matchReader = MatchReader.fromCsv('football.csv');
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


const summary = Summary.winsAnalysisWithHtmlReport('Huddersfield');
summary.buildAndPrintReport(matchReader.matches);