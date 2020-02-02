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

module.exports = internHTML;