// Card data
const cardsArray = [
    {
      name: 'c++',
      img: 'img/c++.png',
    },
    {
      name: 'c',
      img: 'img/c.png',
    },
    {
      name: 'go',
      img: 'img/go.png',
    },
    {
      name: 'html',
      img: 'img/html.png',
    },
    {
      name: 'java',
      img: 'img/java.png',
    },
    {
      name: 'js',
      img: 'img/js.png',
    },
    {
      name: 'net',
      img: 'img/net.png',
    },
    {
      name: 'php',
      img: 'img/php.png',
    },
    {
      name: 'python',
      img: 'img/python.png',
    },
    {
      name: 'ruby',
      img: 'img/ruby.png',
    },
    {
      name: 'scala',
      img: 'img/scala.png',
    },
    {
      name: 'swift',
      img: 'img/swift.png',
    },
  ]


  const gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 500;
let resetButton; 

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const { name, img } = item;

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  const selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
};

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});



function setGameOver() {

  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  grid.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
setGameOver();
function resetGame() {
  setGameOver();
  window.location.reload(true);

}
