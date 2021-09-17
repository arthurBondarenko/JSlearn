let choices = ["paper", "rock", "scissors"];
let i = Math.floor(Math.random() * 3);
let ComChoice = choices[i];
let UserPoints = 0;
let ComputerPoints = 0;

function score() {
    let score_div = document.getElementById("score").innerHTML = UserPoints + "-" + ComputerPoints;
}

setInterval(score, 50);

function convert(word) {
    if(word === "paper") return '<i class="far fa-hand-paper"></i>';
	if(word === "rock") return '<i class="far fa-hand-rock"></i>';
	return '<i class="far fa-hand-scissors"></i>'
}

function game(UserChoice){
	let box = document.getElementById("challenge");
	box.style.display = "inline-flex";
	let userDiv = document.getElementById("YourObject");
	userDiv.innerHTML = convert(UserChoice);    
	let comDiv = document.getElementById("ComObject");
	comDiv.innerHTML = convert(ComChoice);

    if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper"){
		win(UserChoice);
	}else if (UserChoice === ComChoice) {
        draw(UserChoice);
    }else {
        lose(UserChoice);
    }
    function continuesGame(){
        i = Math.floor(Math.random() * 3);
        ComChoice = choices[i];
        box.style.display = "none";
    }
    setTimeout(continuesGame, 1200);
}
function win(bn) {
    UserPoints++;
    document.getElementById("who").innerHTML = "YOU WIN!";
}
function draw(bn) {
    
    document.getElementById("who").innerHTML = "Draw!";
}
function lose(bn) {
    
    ComputerPoints++;

    document.getElementById("who").innerHTML = "YOU LOSE!";
}
