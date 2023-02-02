document.querySelector("#search-input").addEventListener("input", filterList);
function filterList() {
  const searchInput = document.querySelector("#search-input");
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  console.log(listItems);

  listItems.forEach((item) => {
    let text = item.textContent;
    if (text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
