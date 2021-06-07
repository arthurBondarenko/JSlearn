let div = document.createElement("div");
div.classList.add("block");
document.body.appendChild(div);


window.onkeydown = function(e) {
    console.log(e.keyCode);
    console.log(e.code);
    console.log(e.key);
    let code = e.keyCode;
    div.textContent = code;

};