const questions = require("inquirer");
var input = {};

 
  
  var prompts = new Rx.Subject();
inquirer.prompt(prompts);
inquirer.prompt(prompts).ui.process.subscribe(onEachAnswer, onError, onComplete);
   
  // At some point in the future, push new questions
prompts.next({
      type: "input",
      message: "what is the weather?",
      name: "weather"
     
  });
  prompts.next({
    /* question... */
  });
   
  // When you're done
  prompts.complete();
  

module.exports = {input};