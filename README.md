 <p align="center">
  <img height="50px" src="https://miro.medium.com/max/7200/1*Jkb_tsMBOvL6wQ8bzldu8Q.png" />
  <img height="50px" src="https://icons-for-free.com/iconfiles/png/512/vscode+icons+type+cucumber-1324451271508264840.png" />
  <img height="50px" src="https://cdn.iconscout.com/icon/free/png-256/mocha-1-1175012.png" />
 </p>
<h1 align="center">Task for Kaluza</h1>

This is a task to Automate API using Cypress, Cucumber and Mochawesome report, Please see below for the Test Case that are automated 

### Why I choose Cypress? 
I choose Cypress over other tools because I have many years of experience with this tool and I feel comfortable.
Cypress also provides integration with Cucumber for writing the test scenarios in BDD format. 


## Task 1
Due to TLF api registration form having issues, I took the decision to looking for an alternative API. 
I found CityMapper API

I also used https://postcodes.io/ API to generate lat & long for a location(postcode)

## Prerequisite

### city mapper
1. Go to https://enterprise.citymapper.com/ and create a free account to access API Key
2. Then create a `.env` and add the key by following `.evn.example` template

### mediawiki
1. Go to https://www.mediawiki.org/wiki/Manual:Bot_passwords and create a free account to be able to create a bot
2. Then edit `.env` and add the `username` & `password` by following `.evn.example` template

## Install

1.  clone the repo
2.  `npm install` or 	`yarn install`


## Run tests
**CLI** - Run CLI
### Run regression 
 
```
npm run run:regression
```

### Run smoke pack 
 
```
npm run run:smoke
```
**Cypress UI** - Run on Cypress UI
 
```
npx cypress open
```

## Generate Report
```
node cucumber-html-report.js  
```
## Technology used:

 - Cypress 
 - Cucumber
 - Mocha
 - Gitub Action
 - multiple-cucumber-html-reporter

## DEMO
[Live report - Schedule to run everyday ](https://pirasanthan-jesugeevegan.github.io/amt-kaluza/)
