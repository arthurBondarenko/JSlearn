const btn = document.querySelector(".btn");
let result = document.getElementById("result");
const textarea = document.getElementById("textarea");
let users = textarea.value.split("\n");

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

btn.addEventListener("click", () => {
  let index = getRandomNumber(0, users.length - 1);
  result.innerText = users[index];
});
