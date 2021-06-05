
// for(let num = 1; num <= 100; num++) {

//     if(num % 3 === 0) {
//         console.log("Fizz");
//     }

//     else if(num % 5 === 0) {
//         console.log("Buzz");
//     }

//     else if(num % 3 === 0 && num % 5 === 0){
//         console.log(fizzbuzz)
//     }

//     else {
//         console.log(num);
//         }
// }


const list = [];
let div = document.createElement("div");
document.body.appendChild(div);

for( let i = 1; i<= 100; i++) {

    if(i % 3 === 0 && i % 5 === 0){
        list.push("fizzbuzz")
    }
    else if(i % 3 === 0) {
        list.push("Fizz");
    }

    else if(i % 5 === 0) {
        list.push("Buzz");
    }

    else if(i % 3 === 0 && i % 5 === 0){
        list.push("fizzbuzz")
    }

    else {
        list.push(i);
        }
}

div.innerHTML = list;