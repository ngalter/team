'use strict';
var inquirer = require('inquirer');

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
          output.push(answers);
          if (answers.askAgain) {
            ask();
          } else {
            console.log(output);
          }
        });
      }
      
main();
function main() {
    console.log('Enter Team Members');
    mainQuestions();
  }

function mainQuestions() {
    inquirer.prompt(questMain).then(answers => {
        console.log(answers.role);
        moreQuestions(answers.role);
        ask();
    });
}

function moreQuestions(myrole) {
    console.log(myrole);
        if (myrole === "Manager") {
            inquirer.prompt(questManager).then(answers => {
                console.log(answers.officeNumber);
            });
              
        } else if (myrole === "Engineer") {
            inquirer.prompt(questEng).then(answers => {
                console.log(answers.github);
            });
              
        } else if (myrole === "Intern") {
            inquirer.prompt(questInt).then(answers => {
                console.log(answers.school);
            });
        } else {
            console.log("There are only three job types, something is wrong.");
        }

    }


    //-------------------
    // var directionsPrompt = {
    //     type: 'list',
    //     name: 'direction',
    //     message: 'Which direction would you like to go?',
    //     choices: ['Forward', 'Right', 'Left', 'Back']
    //   };
  
    //   function main() {
    //     console.log('You find youself in a small room, there is a door in front of you.');
    //     exitHouse();
    //   }
  
    //   function exitHouse() {
    //     inquirer.prompt(directionsPrompt).then(answers => {
    //       if (answers.direction === 'Forward') {
    //         console.log('You find yourself in a forest');
    //         console.log(
    //           'There is a wolf in front of you; a friendly looking dwarf to the right and an impasse to the left.'
    //         );
    //         encounter1();
    //       } else {
    //         console.log('You cannot go that way. Try again');
    //         exitHouse();
    //       }
    //     });
    //   }
  
    //   function encounter1() {
    //     inquirer.prompt(directionsPrompt).then(answers => {
    //       var direction = answers.direction;
    //       if (direction === 'Forward') {
    //         console.log('You attempt to fight the wolf');
    //         console.log(
    //           'Theres a stick and some stones lying around you could use as a weapon'
    //         );
    //         encounter2b();
    //       } else if (direction === 'Right') {
    //         console.log('You befriend the dwarf');
    //         console.log('He helps you kill the wolf. You can now move forward');
    //         encounter2a();
    //       } else {
    //         console.log('You cannot go that way');
    //         encounter1();
    //       }
    //     });
    //   }
  
    //   function encounter2a() {
    //     inquirer.prompt(directionsPrompt).then(answers => {
    //       var direction = answers.direction;
    //       if (direction === 'Forward') {
    //         var output = 'You find a painted wooden sign that says:';
    //         output += ' \n';
    //         output += ' ____  _____  ____  _____ \n';
    //         output += '(_  _)(  _  )(  _ \\(  _  ) \n';
    //         output += '  )(   )(_)(  )(_) ))(_)(  \n';
    //         output += ' (__) (_____)(____/(_____) \n';
    //         console.log(output);
    //       } else {
    //         console.log('You cannot go that way');
    //         encounter2a();
    //       }
    //     });
    //   }
  
    //   function encounter2b() {
    //     inquirer
    //       .prompt({
    //         type: 'list',
    //         name: 'weapon',
    //         message: 'Pick one',
    //         choices: [
    //           'Use the stick',
    //           'Grab a large rock',
    //           'Try and make a run for it',
    //           'Attack the wolf unarmed'
    //         ]
    //       })
    //       .then(() => {
    //         console.log('The wolf mauls you. You die. The end.');
    //       });
    //   }

