let input = document.getElementById("reversTheName");
let div = document.getElementById("div");


input.addEventListener("keyup", reverseString);



function reverseString(){
    let str = input.value;
    let newString="";
 
    for(var i=str.length-1; i>=0; i--){
     newString += str[i];
    }
    div.innerText = newString;
   }