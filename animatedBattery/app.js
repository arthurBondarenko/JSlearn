function chargebattery() {
  let battery = document.getElementById("battery");
  battery.innerHTML = "&#xf244;";
  battery.style.color = "black";
  setTimeout(function () {
    battery.innerHTML = "&#xf243;";
    battery.style.color = "#ff0000";
  }, 1000);
  setTimeout(function () {
    battery.innerHTML = "&#xf242;";
    battery.style.color = "#ffff00";
  }, 2000);
  setTimeout(function () {
    battery.innerHTML = "&#xf241;";
    battery.style.color = "#ffff00";
  }, 3000);
  setTimeout(function () {
    battery.innerHTML = "&#xf240;";
    battery.style.color = "#00b300";
  }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);
