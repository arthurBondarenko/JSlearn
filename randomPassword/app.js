let btn = document.getElementById("button");
let Passlength = document.getElementById("Passlength");
function getPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+={}[];<>/";
    let passwordLenght = Passlength.value;
    let password = "";

    for (let i=0; i<passwordLenght; i++){
        let randomNumber = Math.floor(Math.random()*chars.length);
        password+=chars.substring(randomNumber, randomNumber+1)
    }
    return password;
}
btn.addEventListener("click", function() {
    location.reload();
    document.getElementById("input").value = getPassword();
});