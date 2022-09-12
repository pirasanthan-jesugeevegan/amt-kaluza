const report = require('multiple-cucumber-html-reporter');
const fs = require('fs-extra');
const path = require('path');

const cucumberJsonDir = path.resolve(process.cwd(), 'cypress/reports');
const ReportDir = path.resolve(process.cwd(), 'cypress/reports');

if (!fs.existsSync(cucumberJsonDir)) {
  console.warn('REPORT CANNOT BE CREATED!');
} else {
  fs.readFile('cypress/.run/results.json', function read(err, data) {
    let runInfos = JSON.parse(data);
    let domain = new URL(runInfos.config.baseUrl);
    domain = domain.hostname.replace('www.', '');

    report.generate({
      pageTitle: `${domain} | Automation Report`,
      reportName: `Automation Report for ${domain} Environment`,
      jsonDir: cucumberJsonDir,
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
