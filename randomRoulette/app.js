let cards_block = document.querySelector('.cards');
let cards = document.querySelectorAll('.cards > div');

function start() {
  let random = Math.floor(Math.random() * 11); 

  cards_block.style.left = -random * 100 + 'px';

  setTimeout(function() {
    cards[random].style.background = '#7B90F7';
    cards[random].style.color = 'white';
    random++;

  }, 5000)

  cards.reset();
};
