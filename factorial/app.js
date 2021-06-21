// // program to find the factorial of a number
let btn = document.querySelector("button").addEventListener("click", factorial);

let output = document.querySelector('#output');

function printMessage(message) {
    let div = document.createElement('div');
    div.textContent = message;
    output.innerHTML = div.textContent;
}


function factorial() {
    const number = parseInt( document.getElementById("input").value);

    if (number < 0) {
        alert('Error! Factorial for negative number does not exist.');
    }
    
    else if (number === 0) {
        console.log(`The factorial of ${number} is 1.`);
    }
    
    else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
        printMessage(`The factorial of ${number} is ${fact}.`);
    }
}

// // program to find the factorial of a number
