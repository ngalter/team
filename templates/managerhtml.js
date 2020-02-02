const managerHTML = (data, res) => {
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

module.exports = managerHTML;