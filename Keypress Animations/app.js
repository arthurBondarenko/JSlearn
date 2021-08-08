document.onkeydown = animateKeys;
let colors = ['#FF0000', '#00FFFF', '#0000FF', '#0000A0', '#ADD8E6', '#800080', '#FFFF00','#00FF00', '#FF00FF', '#C0C0C0', '#808080', '#000000', '#FFA500', '#A52A2A', '#800000', '#008000', '#808000'];

function animateKeys(event) {
    let keyCode = event.keyCode;
    let char = String.fromCharCode(keyCode);

    let key = document.createElement("div");
    document.body.appendChild(key);

    key.style.position = "absolute";

    let randX = Math.round(Math.random() * window.innerWidth); 
    let randY = Math.round(Math.random() * window.innerHeight); 

    key.style.left = randX + "px";
    key.style.top = randY + "px";
    key.innerText = char;

    let color = colors[Math.floor(Math.random() * colors.length)];
    key.style.color = color;

    key.style.transition = "all 0.5s linear 0s";
    key.style.left = key.offsetLeft - 30 + "px";
    key.style.top = key.offsetTop - 30 + "px";
    key.style.fontSize = "100px";
    key.style.opacity = "0";

    let sound = new Audio();
    sound.src = "keypress.mp3";
    sound.play();
}




