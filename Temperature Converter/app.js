let ftemp = document.querySelector(".fahrenheit");
let ctemp = document.querySelector(".celsius");
let ktemp = document.querySelector(".kelvin");
let btn = document.querySelector("button");



ftemp.addEventListener("input", function(){
    let celsius = (5/9*(ftemp.value-32)).toFixed(2);
    ctemp.value = celsius;

    let kelvin = ((ftemp.value-32)/1.8+273.15).toFixed(2);
    ktemp.value = kelvin;
});

ctemp.addEventListener("input", function(){
    let cInput= parseFloat(ctemp.value);

    let fahrenheit = ((ctemp.value*1.8)+32).toFixed(2);
    ftemp.value = fahrenheit;
    let kelvin = cInput + 273.15;

    ktemp.value = kelvin;
});
ktemp.addEventListener("input", function(){
    let kInput = parseFloat(ktemp.value);

    let fahrenheit = 1.8*(kInput - 273) +32;
    ftemp.value = fahrenheit;
    
    let celsius = kInput - 273.15;
    ctemp.value = celsius;
});

btn.addEventListener("click", function(){
    ftemp.value= ""; 
    ctemp.value= ""; 
    ktemp.value= ""; 
});