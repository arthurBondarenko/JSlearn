let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let empty = 9;
let moves = -1;
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 0];
im = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 0]);

for (let i = 0; i <= 8; i++) {
  if (im[i] == 0) empty = i + 1;
}

let restart = 0;
function won() {
  ctx.clearRect(300, 300, 150, 150);
  let img = document.getElementById("puzz9");
  let pat = ctx.createPattern(img, "repeat");
  ctx.fillStyle = pat;
  ctx.fillRect(300, 300, 150, 150);
  m = document.getElementById("message");
  m.innerHTML = "You won the game in " + moves.toString() + " moves";
  restart = 1;
  moves = -1;
}

function draw() {
  moves++;
  mov = document.getElementById("moves");
  mov.innerHTML = "MOVES: " + moves.toString();
  m = document.getElementById("message");
  m.innerHTML = "";
  let t;
  t = 0;
  if (restart == 1) {
    im = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 0]);
    for (let i = 0; i <= 8; i++) {
      if (im[i] == 0) empty = i + 1;
    }
    ctx.clearRect(0, 0, 450, 450);
    restart = 0;
  }
  for (let i = 0; i < 9; i++) {
    if (im[i] != ar[i]) t = 1;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      component(i, j);
    }
  }
  if (t == 0) {
    won();
  }
}

function component(x, y) {
  let text = "puzz";
  z = x + 3 * y;
  z = im[z];
  text = text + z.toString();
  if (z != 0) {
    let img = document.getElementById(text);
    let pat = ctx.createPattern(img, "repeat");
    ctx.fillStyle = pat;
  } else {
    ctx.fillStyle = "white";
  }
  ctx.fillRect(150 * x, 150 * y, 150, 150);
}

function moveup() {
  ctx.clearRect(0, 0, 450, 450);
  if (restart == 1) {
    draw();
    return;
  }
  if (empty == 9 || empty == 7 || empty == 8) {
    moves--;
    draw();
  } else {
    text = "puzz";
    let curr = empty;
    empty = empty + 3;
    let next = empty;
    im[curr - 1] = im[next - 1];
    im[next - 1] = 0;
    draw();
  }
}

function movedown() {
  ctx.clearRect(0, 0, 450, 450);
  if (restart == 1) {
    draw();
    return;
  }
  if (empty == 1 || empty == 2 || empty == 3) {
    moves--;
    draw();
  } else {
    text = "puzz";
    let curr = empty;
    empty = empty - 3;
    let next = empty;
    im[curr - 1] = im[next - 1];
    im[next - 1] = 0;
    draw();
  }
}

function moveleft() {
  ctx.clearRect(0, 0, 450, 450);

  if (restart == 1) {
    draw();
    return;
  }

  if (empty == 6 || empty == 9 || empty == 3) {
    moves--;
    draw();
  } else {
    text = "puzz";
    let curr = empty;
    empty = empty + 1;
    let next = empty;
    im[curr - 1] = im[next - 1];
    im[next - 1] = 0;
    draw();
  }
}

function moveright() {
  ctx.clearRect(0, 0, 450, 450);
  if (restart == 1) {
    moves--;
    draw();
    return;
  }
  if (empty == 1 || empty == 4 || empty == 7) {
    moves--;
    draw();
  } else {
    text = "puzz";
    let curr = empty;
    empty = empty - 1;
    let next = empty;
    im[curr - 1] = im[next - 1];
    im[next - 1] = 0;
    draw();
  }
}

window.addEventListener("keydown", function (e) {
  key = e.keyCode;
  if (key == 37) {
    e.preventDefault();
    moveleft();
  }
  if (key == 38) {
    e.preventDefault();
    moveup();
  }
  if (key == 39) {
    e.preventDefault();
    moveright();
  }
  if (key == 40) {
    e.preventDefault();
    movedown();
  }
  if (key == 83) {
    e.preventDefault();
    start();
  }
});
function start() {
  draw();
}
ctx.font = "30px Arial";
ctx.fillText("Hit S to start the game", 80, 210);
