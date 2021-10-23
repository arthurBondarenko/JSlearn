navigator.getBattery().then(function (battery) {
  let waving = document.getElementById("wave");
  let leveling = document.getElementById("level");
  let Blevel = -(battery.level * 100) - 100;
  let cTime = battery.chargingTime;

  function condition() {
    leveling.innerHTML = battery.level * 100 + "%";
    waving.style.top = -(battery.level * 100 + 100) + "%";
  }
  condition();

  function checking() {
    if (battery.charging == true) {
      document.getElementById("status").innerHTML = "🗲";
      document.getElementById("particle").style.display = "block";
      document.querySelector("body").style.transition = "background 2s";
      document.querySelector("body").style.background =
        "radial-gradient(white, #0fff00)";
      document.getElementById("status").style.textShadow =
        "0 0 15px white, 0 0 15px white";
    } else if (battery.charging == false) {
      document.getElementById("status").innerHTML = "🗲";
      document.getElementById("particle").style.display = "none";
      document.querySelector("body").style.transition = "background 2s";
      document.querySelector("body").style.background =
        "radial-gradient(white, gray)";
      document.getElementById("status").style.textShadow = "0px 0px 0px";
    }
  }
  checking();

  battery.onlevelchange = function () {
    condition();
  };

  battery.onchargingchange = function () {
    checking();
  };
});
