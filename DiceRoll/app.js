const firstRandomNum = Math.floor(Math.random() * 6) + 1;
const firstDiceImg = 'dice' + firstRandomNum + ".png";
const SecondRandomNum = Math.floor(Math.random() * 7);
const SecondDiceImg = 'dice' + SecondRandomNum + ".png";

document.querySelectorAll("img")[0].setAttribute('src', firstDiceImg);
document.querySelectorAll("img")[1].setAttribute('src', SecondDiceImg);

if(firstRandomNum > SecondRandomNum) {
    document.querySelector("h1").innerHTML = "The winner is User 1";
} else if (firstRandomNum < SecondRandomNum) {
    document.querySelector("h1").innerHTML = "The winner is User 2";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}


 function reset() {

    window.location.reload(true);

  }