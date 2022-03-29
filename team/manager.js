const Employee = require('./employee');

// manager class that extends the employee constructor
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}
	getOfficeNumber() {
		return this.officeNumber;
	}
	getRole() {
		return 'Manager';
	}
}

module.exports = Manager;