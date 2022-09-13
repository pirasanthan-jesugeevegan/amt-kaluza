const report = require('multiple-cucumber-html-reporter');
const fs = require('fs-extra');
const path = require('path');

const ReportDir = path.resolve(process.cwd(), 'cypress/reports'); // Path for report directory

if (!fs.existsSync(ReportDir)) {
  console.warn('REPORT CANNOT BE CREATED!');
} else {
  fs.readFile('cypress/.run/results.json', function read(err, data) {
    let runInfos = JSON.parse(data); // run information
    let domain = new URL(runInfos.config.baseUrl);
    domain = domain.hostname.replace('www.', '');

    // construct the report using data from post build data
    report.generate({
      pageTitle: `${domain} | Automation Report`,
      reportName: `Automation Report for ${domain} Environment`,
      jsonDir: ReportDir,
      reportPath: ReportDir,
      displayReportTime: true,
      displayDuration: true,
      metadata: {
        browser: {
          name: runInfos.browserName,
          version: runInfos.browserVersion,
        },
        device: 'Virtual Machine',
        platform: {
          name: 'linux',
          version: runInfos.osVersion,
        },
      },
      customData: {
        title: 'Run info',
        data: [
          {
            label: 'Environment',
            value: `${domain}`,
          },
          { label: 'Cypress Version', value: runInfos.cypressVersion },
          { label: 'Test Type', value: 'Regression' },
          {
            label: 'Execution Start Time',
            value: new Date(runInfos.startedTestsAt).toLocaleString(),
          },
          {
            label: 'Execution End Time',
            value: new Date(runInfos.endedTestsAt).toLocaleString(),
          },
        ],
      },
    });
  });
}
