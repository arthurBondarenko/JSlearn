const tools = ["rock", "paper", "scissors"];

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomIndex = getRandomNumber(0, 2);
const userAnswer = prompt("Rock, paper or scissors?");
const computerAnswer = tools[randomIndex];

console.log(`user anser is ${userAnswer}`);
console.log(`computer anser is ${computerAnswer}`);

const startGame = (userAnswer, computerAnswer) => {
  userAnswer = userAnswer.toLowerCase();
  if (!userAnswer || !tools.includes(userAnswer)) {
    return "Bad answer";
  }

  let res = "";

  const isDraw = userAnswer === computerAnswer;
  const isUserWin =
    (userAnswer === "rock" && computerAnswer === "scissors") ||
    (userAnswer === "paper" && computerAnswer === "rock") ||
    (userAnswer === "scissors" && computerAnswer === "paper");

  if (isDraw) {
    res = "It's Draw";
  } else if (isUserWin) {
    res = "You Won";
  } else {
    res = "You lose";
  }
  return res;
};

const result = startGame(userAnswer, computerAnswer);
alert(result);
