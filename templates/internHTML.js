var name;
var role = "Intern";
var id;
var email;
var faIntern = "fas fa-user-graduate"

const internHTML = (ret, res) => {
      return `<div class="col">
  <div class="card">
    <div class="card-header">${name}<br>
    <i class=${faIntern}></i> ${role}</div>
    <div class="card-body">
      <div class="card-item">Id: ${id}</div>
      <div class="card-item"><a href='#'>${email}</a></div>
      <div class="card-item">School: ${school}</div>
    </div>     
  </div>
    </div>`
};

const beginHTML = (ret, res) => {
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
       .container {
       margin-left: auto;
       margin-right: auto;
       max-width: 960px;
       }
       .row {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         margin-top: 20px;
         margin-bottom: 20px;
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
         width: 270px;
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
       .col {
       flex: 1;
       text-align: center;
       }
    </style>
</head>
<body>
  <header>My Team</header>
  <div class="container">
    <div class="row"></div>`
};

const endHTML = (ret, res) => {
    return `</div>
</div>    
</body>
</html>`
};