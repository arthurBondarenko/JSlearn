const textarea = document.querySelector("textarea");

textarea.addEventListener("keyup", e => {
    let scHeight = e.target.scrollHeight;
    textarea.style.height = "63px";    
    textarea.style.height = `${scHeight}px`;

});