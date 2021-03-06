const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const qiestionContainerElement = document.getElementById("question-container");
let shuffledQuestions,currentQuestionIndex
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");


startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame(){
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    qiestionContainerElement.classList.remove("hide");
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
nextButton.classList.add("hide");
while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
}

}
function selectAnswer(e){
    const  selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct )
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    }else {
        startButton.innerText = "Reset"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct")
    }else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
     element.classList.remove("correct")
     element.classList.remove("wrong")

}

const questions = [
{
    question: "What is 2 + 2?",
    answers: [
        {text: "4", correct: true},
        {text: "8", correct: false},
        {text: "6", correct: false},
        {text: "2", correct: false},
        
    ]
},
{
    question: "What is that?",
    answers: [
        {text: "1", correct: true},
        {text: "qwerty", correct: false},
        {text: "adsd", correct: false},
        {text: "asa", correct: false},
    ]
},
{
    question: "What the f*ck is this?",
    answers: [
        {text: "right", correct: true},
        {text: "nope", correct: false},
        {text: "yes", correct: false},
        {text: "maybe", correct: false},
    ]
},
{
    question: "really?",
    answers: [
        {text: "yes", correct: true},
        {text: "no", correct: false},
        {text: "Ofc", correct: false},
        {text: "really", correct: false},
    ]
},
{
    question: "Do you speak English motherf*cker?",
    answers: [
        {text: "yes", correct: true},
        {text: "Yes", correct: false},
        {text: "yeah", correct: false},
        {text: "da", correct: false},
    ]
}


]