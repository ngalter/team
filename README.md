# Team
 
 #User Story
 This Application generates a webpage that displays my team's basic info.
 It gives me quick access to email and Git Hub profiles.
 
 #Jest
 First each employee class passed the jest testing process.
 There is a gif file showing the tests passing.
 
 #About
 1. The user enters team information from a recursive command line interface.
 2. The information that is entered creates different classes of employee which are all child classes of the Employee class.
 a. Manager
 b. Engineer
 c. Intern
 3. The application enforces the requirement that there is only 1 manager but there can be any number of interns and engineers.
 
 There is a gif showing the data input process.
 
 3. The data created from each class is passed through to an HTML template to format the web page information.
 4. When the user is finished inputing data the ouput HTML file is completed.
 
 #Directory Structure
 The directory structure for the files is below:
 lib/           // classes and helper code
 output/        // rendered output
    myteam.html
 templates/     // HTML template(s)
    beginhtml.js
    endhtml.js
    engineerhtml.js
    internhtml.js
    managerhtml.js
 test/          // jest tests
   Employee.test.js
   Engineer.test.js
   Intern.test.js
   Manager.test.js
 app.js         // Runs the application
 
