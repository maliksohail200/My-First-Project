let body = document.querySelector("body")
let buttons = document.querySelectorAll(".buttons")

function colorFunction(id) {
   for (let index = 0; index < buttons.length; index++) {
   if ( buttons[index].id == id) {
    body.style.backgroundColor = buttons[index].id
    body.style.color = 
    buttons[index].style.border = "1px solid black"
   }
   }
}