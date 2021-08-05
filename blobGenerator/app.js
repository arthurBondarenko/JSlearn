let widthSlider = document.getElementById("width");
let heightSlider = document.getElementById("height");
let blob = document.getElementById("blob");
let colorInput = document.getElementById("color");
let generateButton = document.getElementById("generateButton");
let copyButton = document.getElementById("copyButton");

widthSlider.addEventListener("click", function() {
    let widthValue = widthSlider.value;
    blob.style.width = widthValue + "px";
    document.querySelector(".widthCounter").innerHTML = widthValue+"px";
})

heightSlider.addEventListener("click", function() {
    let heightValue = heightSlider.value;
    blob.style.height = heightValue + "px";
    document.querySelector(".heightCounter").innerHTML = heightValue+"px";
})

function displayValue(borderRadius) {
    document.getElementById("copyText").value = `border-radius: ${borderRadius}`;
} 
function colorFunction(e){
    if(e.keyCode === 13){
        let color = document.getElementById("color").value;
        blob.style.background = color;
    }
}
function radius() {
    let topRight = document.getElementById("topRight").value;
    let topLeft = document.getElementById("topLeft").value;
    let bottomRight = document.getElementById("bottomRight").value;
    let bottomLeft = document.getElementById("bottomLeft").value;
    let borderRadius = `${topLeft}% ${topRight}% ${bottomLeft}% ${bottomRight}% / ${100-topLeft}% ${100-topRight}% ${100-bottomLeft}% ${100-bottomRight}% `;
    blob.style.borderRadius = borderRadius;
    displayValue(borderRadius);
}

generateButton.addEventListener("click", radius);

colorInput.addEventListener("keyup", colorFunction)

function copyToClipBoard() {
    let copyText = document.querySelector("input#copyText");
    copyText.select();
    // copyText.setSelectionRange(0,99999);
    document.execCommand("copy");
    alert("Copied Css style: " + copyText.value);
}
copyButton.addEventListener("click", copyToClipBoard);