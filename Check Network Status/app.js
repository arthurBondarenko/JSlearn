window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);

function updateStatus() {
    const status = document.getElementById("status");
    const userStatus = document.querySelector(".user-status");
    const content = document.querySelector(".content");
    const message = document.querySelector(".message");

    if(navigator.onLine) {
        status.innerHTML = "Online";
        userStatus.classList.remove("offline");
        userStatus.classList.add("online");
        content.style.display = "flex";
        message.style.display = "none";
    }else {
        status.innerHTML = "Offline";
        userStatus.classList.remove("online");
        userStatus.classList.add("offline");
        content.style.display = "none";
        message.style.display = "block";
    }

}
updateStatus();