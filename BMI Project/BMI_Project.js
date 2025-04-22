function ShowResults() {
    let Weight = document.getElementById("weight-input").value
    let height = document.getElementById("Height-input").value
    if (Weight == "" || height == "" || isNaN(Weight) || isNaN(height)) {
        alert(`SomeOne In Both ${Weight} And ${height} Is Not Correct`)
    }else{
      let resulted =   (Weight / ((height * height) / 10000)).toFixed(2)
      if (resulted < 18.6) {
        document.getElementById("resulting").innerHTML = `Your Result is ${resulted} thats Under Weight`
        return
      }else if (18.9 < resulted < 24.9) {
        document.getElementById("resulting").innerHTML = `Your Result is ${resulted} thats Normal Weight`
        return
      }else if (resulted > 24.9) {
        document.getElementById("resulting").innerHTML = `Your Result is ${resulted} thats OverWeight`
        return
      }
    }
}
