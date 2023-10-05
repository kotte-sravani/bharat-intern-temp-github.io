let Temp = () =>{
    let opt = document.querySelector("#unit");
    let display = document.querySelector(".value");
    var a = document.querySelector(".TakeValue").value ;

    if (opt.value == "Fahrenheit") {
        console.log(a, "Feh to Cel",opt.value)
        let Cel = (a - 32) * (9 / 5)
        display.innerHTML = Cel.toFixed(4)+" °C"  
    }
    else{
        console.log(a, "Cel to Feh",opt.value)
        let Feh = a * (5 / 9) + 32
        display.innerHTML = Feh.toFixed(4)+" °F"
    }
}