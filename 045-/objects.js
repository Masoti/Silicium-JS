let student = {
	firstname: "Masoud",
	lastname: "Kakouei",
	age: 37,
	fields: ["programming", "musician", "photographer", "writer", "teacher"],
	status: true,

	fullname() {
		return `${this.firstname} ${this.lastname}`
	},

	sayHello() {
		console.log(`Hello ${this.fullname()}!`)
	},

	showFields() {
		this.fields.forEach((field, number) => {
			console.log(`${number + 1}. ${field}`)
		});
	}
}

// console.log(student.fullname())
student.sayHello()
student.showFields()