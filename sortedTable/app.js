var table = document.getElementById("tableSort");
var sortType = 1;
var classArrays = {
  0: "uarr",
  1: "darr",
};
sortByTh(table.getElementsByTagName("th")[0]);
table.addEventListener("click", sortStart);
function sortStart(event) {
  var targ = event.target;
  var check = event.tagName;
  if (targ.tagName !== "TH") return;
  sortByTh(targ);
}
function sortByTh(th) {
  var rows = getArray(table.tBodies[0].rows);
  var index = th.cellIndex;
  sortRows(rows, index);
  sortType = -sortType + 1;
  addArrow(th);
  printSort(rows);
}
function addArrow(th) {
  var allTh = table.querySelectorAll("th");
  for (var i = 0; i < allTh.length; i++) {
    allTh[i].classList.remove(classArrays[0]);
    allTh[i].classList.remove(classArrays[1]);
  }
  th.classList.add(classArrays[sortType]);
}
function sortRows(rows, index) {
  rows.sort(sort);
  function sort(a, b) {
    var val_a = a.children[index].innerHTML;
    var val_b = b.children[index].innerHTML;
    if (parseFloat(val_a)) {
      val_a = parseFloat(val_a);
      val_b = parseFloat(val_b);
    }
    if (sortType) {
      return val_a > val_b;
    } else {
      return val_b > val_a;
    }
  }
}
function printSort(rows) {
  var tbody = table.tBodies[0];
  tbody.innerHTML = "";
  for (var i = 0; i < rows.length; i++) {
    tbody.appendChild(rows[i]);
  }
}
function getArray(collection) {
  var arr = [];
  for (var i = 0; i < collection.length; i++) {
    arr.push(collection[i]);
  }
  return arr;
}
