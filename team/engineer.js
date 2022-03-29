const Employee = require("./employee");

// engineer class that extends the employee cunstructor
class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
	}
	getGithub() {
		return this.github;
	}
	getRole() {
		return 'Engineer';
	}
}

module.exports = Engineer