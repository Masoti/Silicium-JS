// let lists = document.querySelectorAll("li")

// lists.forEach(list => {
// 	// list.innerText += " new"
// 	// list.innerHTML += ` <span class="badge badge-danger">new</span>`
// 	list.textContent += " new"
// })

// let list = document.querySelector("li")

// console.log(list.innerText)
// console.log(list.textContent)

// let lists = document.querySelectorAll("li")

// lists.forEach(list => {
// 	if (list.textContent.includes(" new")) {
// 		list.innerHTML += ` <span class="badge badge-danger">new</span>`
// 	}
// })



let people = [
	{neme: "Masoud", new: true},
	{neme: "Sara", new: false},
	{neme: "Sami", new: false},
	{neme: "Masoti", new: true},
]

let ul = document.querySelector("ul")

people.forEach(p => {
	ul.innerHTML += `<li>${p.name}</li>`
})