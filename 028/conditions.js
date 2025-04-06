console.log(true);
console.log(false);
console.log(true && false);
console.log(true && true);
console.log(false && true);
console.log(false && false);

console.log(true || false);
console.log(true || true);
console.log(false || true);
console.log(false || false);

console.log(!false);
console.log(!true);

// let access = false;
let mehran = [12, true]

// access = (age >= 18) ? true : false;

// console.log(access)





if (mehran[0] > 15 && mehran[1]) {
	console.log("Your point are great!")
} else if (mehran[0] > 10 || mehran[1]) {
	console.log("Yout point is not too bad, TRY MORE!")
} else {
	console.log("Your point is bad.")
}
