'use strict';
var inquirer = require('inquirer');
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");
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
    
const managerHTML = (data, res) => {
    console.log("Manager:" + data);
    var name = data.name;
    var id = data.id;
    var email = data.email;
    var office = data.officeNumber;
    return `<div class="card">
  <div class="card-header">${name}<br>
  <i class="fas fa-mug-hot"></i> Manager</div>
  <div class="card-body">
    <div class="card-item">Id: ${id}</div>
    <div class="card-item">Email:<a href='#'> ${email}</a></div>
    <div class="card-item">Office No: ${office}</div>
  </div>     
</div>`
};
const internHTML = (data, res) => {
    var name = data.name;
    var id = data.id;
    var email = data.email;
    var school = data.school;

    return `<div class="card">
  <div class="card-header">${name}<br>
  <i class="fas fa-user-graduate"></i> Intern</div>
  <div class="card-body">
    <div class="card-item">Id: ${id}</div>
    <div class="card-item">Email:<a href='#'> ${email}</a></div>
    <div class="card-item">School: ${school}</div>
  </div>     
</div>`
};

const engineerHTML = (data, res) => {
    var name = data.name;
    var id = data.id;
    var email = data.email;
    var github = data.github;

    return `<div class="card">
  <div class="card-header">${name}<br>
  <i class="fas fa-glasses"></i> Engineer</div>
  <div class="card-body">
    <div class="card-item">Id: ${id}</div>
    <div class="card-item">Email:<a href='#'> ${email}</a></div>
    <div class="card-item">GitHub:<a href='#'> ${github}</a></div>
  </div>     
</div>`
};

function beginHTML() {
    return  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <title>Team Members</title>
        <style>
           html, body {
          font-family: Arial, Helvetica, sans-serif;
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           body {
           background-color: white;
           }
           header {
             background-color: #ff3366;
             color: white;
             font-size: 2.2em;
             width: 100%;
             padding-top: 1.3em;
             padding-bottom: 1.3em;
             text-align: center;
           }
           .grid-container {
            display: grid;
            background-color: whitesmoke;
            justify-content: space-evenly;
            grid-template-columns: 30% 30% 30%;
            text-align: center;
            padding: 10px;
            grid-gap: 20px;
            }
    
            @media only screen and (max-width: 760px) {
              .grid-container {
                grid-template-columns: 100%;
                }
              }
           .card-header {
             background-color: #0066cc;
             color: white;
             border-top-left-radius: 5px;
             border-top-right-radius: 5px;
             font-size: 1.8em;
             padding-left: .5em;
             padding-top: .4em;
             padding-bottom: .4em;
             text-align: left;
           }
           .card {
             /* width: 270px; */
             margin: 15px;
             box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            }    
            .card-body {
             border-bottom-left-radius: 5px;
             border-bottom-right-radius: 5px;
           }
           .card-item {
            background-color: white;
             color: #000000;
             border: solid 1px #cccccc;
             font-size: .9em;
             padding: .9em;
             text-align: left;
           }
           .card-item a:hover{
            color: #0066cc;
           }
        </style>
    </head>
    <body>
      <header>My Team</header>
      <div class="grid-container">`
};

function endHTML() {
    return `</div>    
    </body>
    </html>`
};