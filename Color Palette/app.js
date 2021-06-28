for(let i = 0; i<100; i++){
    let box = document.createElement("div");
    box.classList.add("box");
    document.body.appendChild(box);
}
function randomColor() {
    let chars = "0123456789abcdef"
    let colorLength = 6;
    let color = "";

    for(let i = 0; i<colorLength; i++){
        let randomColor = Math.floor(Math.random()*chars.length);
        color+=chars.substring(randomColor, randomColor+1);
    }
    return "#" + color;
}

function addColor() {
    let randomBox = document.querySelectorAll(".box");
    randomBox.forEach(e => {
        e.style.backgroundColor = randomColor();
        e.innerHTML= randomColor();
    })
}
addColor();