let button = document.getElementById("finish");

// let numberRegex = /^\d+$/;
// let input = document.querySelectorAll("only_num");
// input.addEventListener("keydown", (event) => {
//   // Разрешаем: backspace, delete, tab и escape
//   if (
//     event.keyCode == 46 ||
//     event.keyCode == 8 ||
//     event.keyCode == 9 ||
//     event.keyCode == 27 ||
//     // Разрешаем: Ctrl+A
//     (event.keyCode == 65 && event.ctrlKey === true) ||
//     // Разрешаем: home, end, влево, вправо
//     (event.keyCode >= 35 && event.keyCode <= 39)
//   ) {
//     // Ничего не делаем
//     return;
//   } else {
//     // Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
//     if (
//       (event.keyCode < 48 || event.keyCode > 57) &&
//       (event.keyCode < 96 || event.keyCode > 105)
//     ) {
//       event.preventDefault();
//     }
//   }
// });

button.addEventListener("click", checkTest);

function checkTest() {
  let result = 0;

  let a1 = document.getElementById("q1").value;
  if (a1 === "4") {
    result++;
  }

  let a2 = document.getElementById("q2").value;
  if (a2 === "9") {
    result++;
  }

  let a3 = document.getElementById("q3").value;
  if (a3 === "8") {
    result++;
  }

  let a4 = document.getElementById("q4").value;
  if (a4 === "7") {
    result++;
  }

  let a5 = document.getElementById("q5").value;
  if (a5 === "10") {
    result++;
  }
  console.log(a1, a2, a3, a4, a5);
  alert("Correct answers: " + result);
}
