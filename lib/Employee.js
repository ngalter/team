class Employee
{
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getName() {
    return this.name;
  }
  getRole() {
    this.role = "Employee";
    return this.role;
  }
}

module.exports = Employee;


