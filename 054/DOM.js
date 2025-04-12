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
	{name: "Masoud", new: true},
	{name: "Sara", new: false},
	{name: "Vahid", new: false},
	{name: "Atabak", new: true},
]

let ul = document.querySelector("ul")

// people.forEach(p => {
// 	ul.innerHTML += `<li>${p.name}</li>`
// })

// people.forEach(p => {
// 	if (p.new) {
// 		ul.innerHTML += `<li>${p.name} <span class="badge badge-danger">new</span></li>`
// 	} else {
// 		ul.innerHTML += `<li>${p.name}</li>`
// 	}
// })

function create_navbar (people) {
	let ul = document.querySelector("ul")
	ul.innerHTML = ""
	people.forEach(p => {
		if (p.new) {
			ul.innerHTML += `<li>${p.name} <span class="badge badge-danger">new</span></li>`
		} else {
			ul.innerHTML += `<li>${p.name}</li>`
		}
	})
}

