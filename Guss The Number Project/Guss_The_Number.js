function Show() {
    let randomNumber = parseInt(Math.random()*10 + 1)
console.log(randomNumber);
let UserNumber = parseInt(document.getElementById("UserInput").value)
console.log(UserNumber);

if (randomNumber === UserNumber) {
    document.getElementById("main").innerHTML = `<h1 class="resultShow">CONGRATULATION YOU WIN BY THIS NUMBER ${UserNumber} <br> FOR MORE PLEASE RELOAD THE PAGE</h1>`
    return
}else{
    alert("Please Guess Again")
}
document.getElementById("Previous").value = randomNumber
}
 