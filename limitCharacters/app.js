let myText = document.getElementById("my-text");
let result = document.getElementById("result");

let limit = 100;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input", function () {
  let textLength = myText.value.length;

  result.textContent = textLength + "/" + limit;

  if (textLength > limit) {
    myText.style.borderColor = "#ff2851";
    result.style.color = "#ff2851";
  } else {
    myText.style.borderColor = "#31821b";
    result.style.color = "#31821b";
  }
});
