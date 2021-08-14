(function() {
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const display = document.querySelector(".display");

    let deg = 0;
    let zoneSize = 45; //deg

const symbolZone = {
  1: "Frog",
  2: "Snail",
  3: "Dolphin",
  4: "Ladybug",
  5: "Koala",
  6: "Unicorn",
  7: "Dragon",
  8: "Snowman",
}

    const handleWin = (actualDeg) => {
      const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
      display.innerHTML = symbolZone[winningSymbolNr]
    }
    startButton.addEventListener('click', () => {
      display.innerHTML = "-";
      startButton.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000);
      wheel.style.transition = 'all 5s ease-out';
      wheel.style.transform = `rotate(${deg}deg)`;
      wheel.classList.add('blur');
    });
  
    wheel.addEventListener('transitionend', () => {
      wheel.classList.remove('blur');
      startButton.style.pointerEvents = 'auto';
      wheel.style.transition = 'none';
      const actualDeg = deg % 360;
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      handleWin(actualDeg);
    });
  })();