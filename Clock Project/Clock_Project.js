let clock = document.getElementById("clockBox").innerHTML
setInterval(function name(params) {
   let time = new Date()
   document.getElementById("clockBox").innerHTML = time.toLocaleTimeString()
},1000)