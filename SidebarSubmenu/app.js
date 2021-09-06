const btn = document.querySelector(".btn");
const feat_btn = document.querySelector(".feat-btn");
const feat_show = document.querySelector(".feat-show");
const serv_show = document.querySelector(".serv-show");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const serv_btn = document.querySelector(".serv-btn");
const sidebar = document.querySelector(".sidebar");
const links = document.querySelectorAll("nav ul li a");
btn.addEventListener("click", () => {
  btn.classList.toggle("click");
  sidebar.classList.toggle("show");
});
feat_btn.addEventListener("click", () => {
  feat_show.classList.toggle("show");
  first.classList.toggle("rotate");
});
serv_btn.addEventListener("click", () => {
  serv_show.classList.toggle("show1");
  second.classList.toggle("rotate");
});

for (var i = 0, length = links.length; i < length; i++) {
  links[i].onclick = function () {
    let linkItem = document.querySelector("nav li.active");
    if (linkItem) linkItem.classList.remove("active");
    this.parentNode.classList.add("active");
  };
}
