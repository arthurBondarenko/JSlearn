const keys = ["Backspace", "Tab", "Enter", "Shift", "Control", "Alt", "CapsLock", "Tab", "Shift", "Escape", "Space", "Delete", "ArrowUp",
"ArrowDown", "ArrowRight", "ArrowLeft", "OS", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "0", "1", "2",
"3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",	"n", "o", "p", "q", "r", "s", "t", "u", 
"v", "w", "x", "y", "z", ".", "Enter", "/", "*", "-", "+", ";",	"'", "[", "]", "`",  ];

 	
	
var guessKey = keys[Math.floor(Math.random()*keys.length)];
console.log(guessKey);

const title = document.getElementById("title");

window.onkeydown = function(e) {
    // console.log(e.keyCode);
    // console.log(e.code);
    // console.log(e.key);
    // let code = e.keyCode;
    // div.textContent = code;
    if(e.key == guessKey) {
        alert("You Guess, That key was " + `${guessKey}`)
    }else {

        setTimeout(function (){
            title.innerHTML = "Not that key";
          },100)
          title.innerHTML = "";
    }

};
