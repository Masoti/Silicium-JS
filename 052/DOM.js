// let header = document.getElementById("header")

// console.log(header)
// header.style.color = 'red'

// let contents = document.getElementsByClassName('content')

// console.log(contents[1])
// contents[0].style.fontSize = '25px'

// let paragraphs = document.getElementsByTagName("p")
// console.log(paragraphs)
// console.log(paragraphs[0].innerText)
// paragraphs[0].innerText = "Edited: Paragraph Edited by JS!"

// let header = document.querySelector("#header")
// header.style.color = 'red'

// let paragraph = document.querySelector("p")
// paragraph.style.color = 'red'

// let content = document.querySelector(".content")
// content.style.color = 'red'

// let paragraphs = document.querySelectorAll("p")
// paragraphs.forEach(paragraph => {
// 	paragraph.style.color = 'red'
// })

// let contents = document.querySelectorAll(".content")
// contents.forEach(content => {
// 	content.style.color = 'blue'
// })

let contents = document.getElementsByClassName('content')
// contents.forEach(content => {      اشتباه
Array.from(contents).forEach(content => {
	content.style.color = 'tomato'
})

// console.log(contents)

let custome_query = document.querySelector("div.content:nth-child(2) > ul:nth-child(2) > li:nth-child(2)")
custome_query.style.color = 'green'
custome_query.style.fontSize = '20px'



#header