let student = {
	firstname: "Masoud",
	lastname: "Kakouei",
	age: 37,
	fields: ["programming", "musician"],
	status: true,
}

// console.log(student)
// console.log(student.firstname)
// console.log(student.lastname)
// console.log(student.age)
// console.log(student.fields)
// console.log(student.fields.length)
// console.log(student.status)

// console.log(student['fields'][1])

// let key = 'fields';
// console.log(student[key])
// console.log(student.key)

console.log(student.firstname)

student.firstname = "Ali"
console.log(student)

student['age'] = 30
console.log(student)