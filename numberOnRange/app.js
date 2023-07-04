let range = document.querySelector(".number");
let rangeNumber = document.querySelector(".range-num");

range.oninput = function () {
  //   console.log(this.value);
  rangeNumber.style.left = this.value - 10 + "px";
  rangeNumber.innerHTML = this.value;
};
