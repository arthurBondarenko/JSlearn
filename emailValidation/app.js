const form = document.querySelector("form");
const eInput = document.querySelector(".input");
const text = form.querySelector(".text");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    form.classList.add("error");
    form.classList.remove("valid");
    if(eInput.value === "") {
        text.innerHTML = "Email can't be blank";
    }else if(!eInput.value.match(pattern)) {
        text.innerHTML = "Please enter a valid email";
    }else {
        form.classList.replace("error", "valid")
        text.innerHTML = "This is a valid email";
    }
});