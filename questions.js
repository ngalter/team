const questions = require("inquirer");
var input = {};
questions.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your Name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is your Id?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your Email?"
  },
  {
    type: "checkbox",
    message: "What is your title?",
    name: "title",
    choices: [
      "Manager",
      "Engineer",
      "Intern"
    ]
  }
  
]).then(function (data) {
  console.log(data);
  input = {
    ...data
  }
  
});

module.exports = {input};