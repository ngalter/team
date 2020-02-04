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
const path = "./output/myteam.html"

var questManager = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is team manager's email address?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
    }
];

var questMain = [
    {
        type: "input",
        name: "name",
        message: "What is the team member's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the team member's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is team member's email address?"
    },
    {
        type: 'list',
        message: 'What is the role of the team member?',
        name: 'role',
        choices: ['Engineer', 'Intern']
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
            mainQuestions();
          } else {
              console.log("The End");
              endWrite();
          }
        });
      }
beginWrite();      
main();

function main() {
    enterManager();
}
function enterManager() {
    console.log('Enter one manager to begin building your team. Then enter any number of engineers and interns.');
    inquirer.prompt(questManager).then(answers => {
        var a = answers;
        const e = new Manager(a.name, a.id, a.email, answers.officeNumber);
        fs.appendFile(path, managerHTML(e), 'UTF-8',
            function (err) {
                if (err) {
                    throw err;
                }
            });
        mainQuestions();
    });
}

function mainQuestions() {
    console.log('Enter team members');
    inquirer.prompt(questMain).then(answers => {
        moreQuestions(answers);
    });
}
function beginWrite() {
    fs.writeFile(path, beginHTML(),
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
    var a = answers;              
       if (answers.role === "Engineer") {
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
