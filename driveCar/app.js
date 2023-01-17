window.onload = () => {
  let surface = document.querySelector(".surface");
  let car = document.querySelector(".car");
  let img = document.querySelector(".car img");

  window.addEventListener("keydown", function (event) {
    if (event.code == "KeyD") {
      surface.classList.toggle("moveRight", "pause");
      car.classList.toggle("suspension", "pause");
    }
  });

  window.addEventListener("keydown", function (event) {
    if (event.code == "KeyW") {
      surface.classList.toggle("moveRight", "pause");
      car.classList.toggle("moveRight", "pause");
      img.src = "Img_05.png";
    } else {
      surface.classList.toggle("pause");
      car.classList.toggle("pause");
      img.src = "Img_06.png";
    }
  });
};
