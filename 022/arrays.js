let students = ["Mehran", 'Ali', "Amir", 'Reza', 'Hasan'];

// students.push("Sima")
// students.push("Sara")
// students.pop()
// students.pop()
// students.shift()
// students.shift()
// students.unshift("Sima")
// students.unshift("Sara")

// students.splice(1, 3)
// students.splice(1, 0, 'Sima', 'Sara')
students.splice(1, 3, 'Sima', 'Sara')

// let new_students = students.slice(0)
let new_students = students.slice(1, 5)

console.log(students)
console.log(new_students)
console.log(new_students.length)
