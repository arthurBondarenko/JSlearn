let answers = [
    "ДА",
    "НЕТ",
    "ХУЙ ЗНАЕТ",
    "А Я ЕБУ?",
    "ЧЁ ЕЩЁ ТЕБЕ СКАЗАТЬ?",
    "ПИЗДУЙ-БОРОЗДУЙ",
    "ВСЁ БУДЕТ...",
    "А САМ КАК ДУМАЕШЬ?",
    "У МАМЫ СВОЕЙ СПРОСИ",
    "ТЕБЯ ЧЁ В ГУГЛЕ ЗАНАНИЛИ"
];

window.onload = function() {
    var eight = document.getElementById("eight");
    var answer = document.getElementById("answer");
    var eightball = document.getElementById("eight-ball");
    var question = document.getElementById("question");
    
    eightball.addEventListener("click", function() {
      if (question.value.length < 1) {
        alert('Enter a question!');
      } else {
        eight.innerText = "";
        var num = Math.floor(Math.random() * Math.floor(answers.length));
        answer.innerText = answers[num];
      }
    });
 };