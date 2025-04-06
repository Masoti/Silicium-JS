let students = ["Mehran", 'Ali', "Amir", 'Reza', 'Hasan'];
let teachers = ["Sam", 'Sima'];
let numbers = [1,2,25,64,3,5,7,17];

console.log(students.includes("Sima"));
console.log(students);
students = students.concat(teachers);
console.log(students);
students = students.concat(teachers, numbers, "Amir Ali");
console.log(students);
students = students.concat("Amir Ali");
console.log(students);
console.log(students.indexOf("Sima"));
console.log(students);
console.log(numbers.find((n) => n > 10));
console.log(numbers);
console.log(numbers.filter((n) => n < 10));
console.log(numbers);