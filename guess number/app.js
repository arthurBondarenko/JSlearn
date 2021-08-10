let name = '';
let number = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

let output = document.querySelector('#output');
let prompt = document.querySelector('#prompt');
let input = document.querySelector('#prompt input');

let resetButton; 


console.log(number);

prompt.addEventListener('submit', handleSubmit);

printMessage("Enter Name:")
input.focus();

function handleSubmit(event) {
    event.preventDefault();

    processInput(input.value)

    input.value = "";
}

function printMessage(message) {
    let li = document.createElement('li');
    li.textContent = message;
    output.appendChild(li);
}

function clearOutput() {
    for (let i = 0; i < output.children.length; i++) {
        output.removeChild(output.children[i]);
    }
}

function processInput(input) {
    if (!input)
        return;
    if (!name) {
        name = input;
        clearOutput();
        printMessage(`${name},We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.`);
        return;
    }

    printMessage(input);

    let guess = Number.parseInt(input);
    if (Number.isNaN(guess)) return;
    guesses += 1;

    if (guesses === 10) {
        printMessage(`Right answer: ${number}.`);
        printMessage ('!!!GAME OVER!!!');
        prompt.remove();
        setGameOver();
    }

    if (guess > number) {
        printMessage("too high");
    }
    else if (guess < number) {
        printMessage("too low");
    }
    else {
        printMessage(`Right answer: ${guess}.`);
        printMessage(`Trys: ${guesses}.`);
        printMessage('GAME OVER');

        prompt.remove();
        setGameOver();
    }
}

function setGameOver() {

    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

function resetGame() {

    window.location.reload(true);

  }
