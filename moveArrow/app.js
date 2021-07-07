// var X;
// var Y;

// let block = document.querySelector(".block");
// block.addEventListener("keydown", event => {
//     if (event.keyCode == 87) {
//       Top();
// }});



// function Top() {
//     Y = block.offsetTop;
//     Y = Y - 10;
//     block.style.top + Y + "px";
// }
// function Bottom() {
//     X = block.offsetTop;
//     X = X - 10;
//     block.style.top + X + "px";
// }
// function Left() {
//     X = block.offsetLeft;
//     X = X - 10;
//     block.style.left + X + "px";
// }
// function Right() {
    // X = block.offsetRight;
    // X = X + 10;
    // block.style.right + X + "px";
// }

// const screenWidth = window.screen.width
// const screenHeight = window.screen.height

// let canvas = document.getElementById("canvas");
// canvas.width  = screenWidth;
// canvas.height = screenHeight;
// const windowInnerWidth = document.documentElement.clientWidth
// const windowInnerHeight = document.documentElement.clientHeight
// var canvas = document.getElementById('canvas'),
// context = canvas.getContext('2d');
// window.addEventListener('resize', resizeCanvas, false);
// function resizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// }

document.body.addEventListener('keydown', move);



let block = document.querySelector('.block');

function move(e) {
  e.preventDefault();
  var left = Number(block.style.left.slice(0, - 2));
  var top = Number(block.style.top.slice(0, -2));
  if (e.keyCode == 37) { // Left
    left--;
    block.style.transform="rotate(-135deg)";
  }
  if (e.keyCode == 38) { // Up
    top--;
    block.style.transform="rotate(-45deg)";
  }
  if (e.keyCode == 39) { // Right
    left++;
    block.style.transform="rotate(45deg)";

  }
  if (e.keyCode == 40) { // Down

  block.style.transform="rotate(-225deg)";
    top++;
  }
  block.style.left = left + 'px';
  block.style.top = top + 'px';
}