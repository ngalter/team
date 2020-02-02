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

module.exports = engineerHTML;