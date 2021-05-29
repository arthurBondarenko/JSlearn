
const min = document.getElementById("minInput");
const max = document.getElementById("maxInput");
const output = document.getElementById("output");
const btn = document.getElementById("btn");

function getRandomNum(min, max) {

    const minVal = Math.ceil(min.value);
    const maxVal = Math.ceil(max.value);


return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);

}
btn.addEventListener("click", () => {
    output.innerHTML = getRandomNum(min, max);
});