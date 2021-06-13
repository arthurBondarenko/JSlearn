let light = document.querySelector(".lantern");
document.addEventListener("mousemove", function(e) {
    let x = e.pageX;
    let y = e.pageY;
    light.style.background = "radial-gradient(circle at "+x+"px "+y+'px, transparent,#000 50%)';
})