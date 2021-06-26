var loadFile = function (event) {
  var image = document.getElementById("image");
  image.src = URL.createObjectURL(event.target.files[0]);
  image.onload = function () {
    URL.revokeObjectURL(image.src);
  };
};

var image = document.querySelector("img");
var filterControls = document.querySelectorAll("input[type=range]");
function applyFilter() {
  var computedFilters = "";
  filterControls.forEach(function (item, index) {
    computedFilters +=
      item.getAttribute("data-filter") +
      "(" +
      item.value +
      item.getAttribute("data-scale") +
      ") ";
  });
  image.style.filter = computedFilters;
}
