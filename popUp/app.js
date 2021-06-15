const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.getElementById("container");
let audio = new Audio("scream.mp3");

audio.oncanplaythrough = function(){

    audio.play();
    }
    


open.addEventListener("click", () => {
    container.classList.add("active");
    audio.play();
});
close.addEventListener("click", () => {
    container.classList.remove("active");
});