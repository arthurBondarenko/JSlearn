
  const clear = document.querySelector(".clear");
  const input = document.getElementById("input");
  let go = document.getElementById("go");
  // let link = document.getElementById("link");
  let list = document.getElementById("list");
  let add = document.getElementById("add");

  let data = localStorage.getItem("TABS");
  if(data) {
    linkList = JSON.parse(data);

    id = linkList.length;
    loadList(linkList);
}else {
    linkList = [];
    id = 0;
}

function loadList(array) {
    array.forEach(function(item){
      addLinkList(item.name, item.id, item.del);
    });
}


  //cоздаем элементы li и получаем значение inputa ${link

function addLinkList(link, id, del) {
  if(del) {return;}
const item = 
            `<li class = "item">
            <i class="fa fa-trash-o de" job ="delete" id="${id}"></i>
            <p class="text">${link}</p>
            </li> 
             `;
const position = "beforeend";


list.insertAdjacentHTML(position, item );

};


//при клике на кнопку add добавляем элемент 
add.addEventListener("click", function(){
 const link = input.value;
      if(link) {

          addLinkList(link, id, false);

          linkList.push({
              name : link,
              id : id,
              del : false
          });
          localStorage.setItem("TABS", JSON.stringify(linkList));
          id++;
      }
      input.value = "";
  }
);









//создаем функцию удаление элементов при клике на иконку

function removeLink(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  
  linkList[element.id].del = true; 

}

list.addEventListener("click", function(event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;

  if(elementJob == "delete") {
      removeLink(element);
  };
//   for(let i = 0; i < linkList.length; i++) {

//     let trash = linkList.getAttribute(del);
//     if(trash == false)
//       linkList.parentNode.removeChild(trash);
// }
// for (var i = 0, l = linkList.length; i < l; i++) {
//   var items = linkList[i];
//   if(items.del === true) {
//     linkList = linkList.filter(trash => trash.del == true);
//     return linkList;
//   }
//   console.log(items.del);

// }
// for (var i =0; i < linkList.length; i++)
//    if (linkList[i].del === true) {
//       linkList.splice(i,1);
//       break;
//    }
  localStorage.setItem("TABS", JSON.stringify(linkList));
});




clear.addEventListener("click", function(){
  localStorage.clear();
  location.reload();
});

//создаем эллементов массива ссылки и получая значение name открываем их 
function openLinkList(linkList) {
  for(var i = 0; i < linkList.length; i++) {
    let a = document.createElement("a");
    a.href = linkList[i].name;
    a.target="_blank";
    a.click();

  }

};