let hours, minutes, seconds;



const dateElement = document.getElementById("today");
const options = {weekday : "long", month: "short", day: "numeric"};
const today = new Date();
dateElement.innerHTML ="until to the end of " + today.toLocaleDateString("us-US", options);



function loop() {
    let date = new Date();

    hours = 23 - date.getHours();

    minutes = 60 - date.getMinutes();
    seconds = 60  - date.getSeconds();


    if (hours.toString().length < 2) hours = `0${hours}`;
    if (minutes.toString().length < 2) minutes = `0${minutes}`;
    if (seconds.toString().length < 2) seconds = `0${seconds}`;

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

    setTimeout(loop, 1000/60);
}

loop();