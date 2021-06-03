// BASE
// function isPalindrome(string) {
//     let arr = string.split("");
//     let reversArr = arr.reverse();
//     let reversString = reversArr.join("");
//     let res = string === reversString;
//     return res;

// }


//Advance

// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");

// }
// isPalindrome('racecar');



//ES6
// const isPalindrome = str => 
//     str === str.split("").reverse().join("");


// isPalindrome("racecar");


//with reg, to lower case...

// function palindrome(str) {
//     // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
//     var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
//     // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
//     // var lowRegStr = "amanaplanacanalpanama";
       
//     // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//     // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//     // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
//     // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
//     // And, var reverseStr = "amanaplanacanalpanama";
     
//     // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
//     return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
//   }
   
//   palindrome("A man, a plan, a canal. Panama");







let x = document.querySelector("button").addEventListener("click", isPalindrome);


function isPalindrome() {
  let input = document.getElementById("input");
  let str = input.value;
  let arr = str.split("");
  let reversArr = arr.reverse();
  let reversString = reversArr.join("");

  if (res = str === reversString){
    alert("Palindorome");
  }
  else{
    alert("Not Palindrome")
  }
}
