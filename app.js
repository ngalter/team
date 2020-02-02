'use strict';
var inquirer = require('inquirer');
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");
var internHTML = require("./templates/internhtml");
var managerHTML = require("./templates/managerhtml");
var engineerHTML = require("./templates/engineerhtml");
var beginHTML = require("./templates/beginhtml");
var endHTML = require("./templates/endhtml");
var fs = require("fs");

var questMain = [
    {
        type: "input",
        name: "name",
        message: "What is the team member name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the team member id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is team member email address?"
    },
    {
        type: 'list',
        message: 'What is the role of the team member?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    }
];
var questAsk =
    {
        type: 'confirm',
        name: 'askAgain',
        message: 'Want to enter another team member (just hit enter for YES)?',
        default: true
      };

var questInt = [
    {
        type: "input",
        name: "school",
        message: "What is the team member's school?"
    }];
var questManager = [
    {
        type: "input",
        name: "officeNumber",
        message: "What is the team member's office number?"
    }];
var questEng = [
    {
        type: "input",
        name: "github",
        message: "What is the team member's Github username?"
     }];
    


var output = [];

    function ask() {
        inquirer.prompt(questAsk).then(answers => {
          if (answers.askAgain) {
            main();
          } else {
              console.log("The End");
              endWrite();
          }
        });
      }
beginWrite();      
main();

function main() {
    console.log('Enter One Manager and up to 4 other Team Members');
    mainQuestions();
  }

function mainQuestions() {
    inquirer.prompt(questMain).then(answers => {
        moreQuestions(answers);
    });
}
function beginWrite() {
    fs.writeFile("./output/myteam.html", beginHTML(),
    function (err) {
      if (err) {
        throw err;
      }
  });

}
function endWrite() {
    fs.appendFile("./output/myteam.html", endHTML(),
    function (err) {
        if (err) {
          throw err;
        }
    });
}

function moreQuestions(answers) {
    var path = "./output/myteam.html"
    var a = answers;
        if (answers.role === "Manager") {
            inquirer.prompt(questManager).then(answers => {
                const e = new Manager(a.name, a.id, a.email, answers.officeNumber);
                fs.appendFile(path, managerHTML(e), 'UTF-8',
                function (err) {
                    if (err) {
                      throw err;
                    }
                });
                output.push(e);
                ask();
            });
              
        } else if (answers.role === "Engineer") {
            inquirer.prompt(questEng).then(answers => {
                const e = new Engineer(a.name, a.id, a.email, answers.github);
                fs.appendFile(path, engineerHTML(e), 'UTF-8',
                function (err) {
                    if (err) {
                      throw err;
                    }
                });
                output.push(e);
                ask();
            });
              
        } else if (answers.role === "Intern") {
            inquirer.prompt(questInt).then(answers => {
                var e = new Intern(a.name, a.id, a.email, answers.school);
                fs.appendFile(path, internHTML(e), 'UTF-8',
                function (err) {
                    if (err) {
                      throw err;
                    }
                });
                output.push(e);
                ask();
            });
        } else {
            console.log("There are only three job types, something is wrong.");
        }

}
