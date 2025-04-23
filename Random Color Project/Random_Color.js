const RandomColor = function(){
    let hex = '123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
       color += hex[Math.floor(Math.random() * 16)]
    }
    return color
};
// function StartChangingColor() {
//     setInterval(document.body.style.backgroundColor = RandomColor(), 1000)
//     return
// }
let intervalId;
let startChangingColor = function(){
    intervalId =  setInterval(functions,100) 
    function functions() {
        document.body.style.backgroundColor = RandomColor()
    }
}
let stopChangingColor = function(){
    
    clearInterval(intervalId)
}

document.querySelector("#Start").addEventListener('click', startChangingColor)
document.querySelector("#Stop").addEventListener('click', stopChangingColor)