const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);


const btn = document.getElementById("btn");
const icon = document.querySelector('i');
let audio = document.getElementById("audio");


btn.addEventListener("click", () => {

    if (icon.classList.contains('fa-play')) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-stop');
        audio.play();
      } else {
        icon.classList.remove('fa-stop');
        icon.classList.add('fa-play');
        audio.pause();
      }

})
