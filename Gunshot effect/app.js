window.onclick = gunshot;

function gunshot(event) {
    let el = document.getElementById("gunshot").cloneNode();
    document.body.appendChild(el);
    el.style.display = "";
    el.style.left = event.clientX - (el.offsetWidth / 2) + "px";
    el.style.top = event.clientY - (el.offsetHeight / 2) + "px";

    let shotSound = new Audio();
    shotSound.src = "resources/gunsound.mp3";
    shotSound.play();
}

