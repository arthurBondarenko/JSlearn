function clock() {
    let date = new Date();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hr = date.getHours();
    
    if(hr < 10) {
        hr = "0" + hr;
    }
    if(min < 10) {
        min = "0" + min;
    }
    if(sec < 10) {
        sec = "0" + sec;
    }
    let color = "" + sec + min + hr;
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec;
    document.body.style.background = "#" + color;
    
}

setInterval(function() {
    clock();
}, 100);