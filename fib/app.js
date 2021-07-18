// function fib(num) {
//     let a = 1;
//     let b = 1;

//     for(i = 3; i<= num; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
// console.log(fib(10));

const input = document.querySelector(".input").value;

// input.oninput = function() {
//     document.getElementById('input').innerHTML = input.value;
//   };

const num = input;
const div = document.createElement("div");
document.body.appendChild(div);


function fib(num) {
    const result = [0, 1];

    for (let i = 2; i <= num; i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1 + prevNum2);
        // console.log(result[result.length-1]);
        document.writeln(result[result.length-1]);
    }
    return result[num];

}




div.innerHTML = num + " num of fib = " + fib(num);


function reset() {

    window.location.reload(false);

  }