const cells = 31;

const items = [
  { name: "iPhone", img: "IMG/case/iPhone.png", chance: 10 },
  { name: "keyboard", img: "IMG/case/keyboard.png", chance: 40 },
  { name: "Headphones", img: "IMG/case/headphones.png", chance: 80 },
];

function getItem() {
  let item;

  while (!item) {
    const chance = Math.floor(Math.random() * 100000);

    items.forEach((elm) => {
      if (chance < elm.chance && !item) {
        item = elm;
      }
    });
  }
  return item;
}

function generateItems() {
  document.querySelector(".list").remove();
  document.querySelector(".scope").innerHTML = `<ul class = "list"></ul>`;
  const list = document.querySelector(".list");

  for (let i = 0; i < cells; i++) {
    const item = getItem();

    const li = document.createElement("li");
    li.setAttribute("data-item", JSON.stringify(item));
    li.classList.add("list__item");
    li.innerHTML = `<img src=${item.img} alt=""/>`;
    list.append(li);
  }
}
generateItems();
let isStarted = false;

function start() {
  if (isStarted) return;
  else isStarted = true;

  generateItems();
  const list = document.querySelector(".list");

  setTimeout(() => {
    list.style.left = "50%";
    list.style.transform = "translate3d(-50%,0,0)";
  }, 0);
  const item = list.querySelectorAll("li")[15];
  list.addEventListener("transitionend", () => {
    isStarted = false;
    item.classList.add("active");
    const data = JSON.parse(item.getAttribute("data-item"));
  });
}
