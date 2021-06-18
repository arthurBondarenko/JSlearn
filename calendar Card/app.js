const dayNumber = new Date().getDate();
const year = new Date().getFullYear();
const dayName = new Date().toLocaleDateString("defaul", {weekday: "long"});
const monthName = new Date().toLocaleDateString("defaul", {month: "long"});




document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".date-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;