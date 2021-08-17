let form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;


    let url = `https://picsum.photos/${width}/${height}`;

    let img = document.getElementById("img");
    img.src = url;

})