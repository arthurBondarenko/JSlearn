let rangeSlider = document.getElementById("rangeSlider");
let emojis = ["angry.png", "none.png", "heart.png", "kiss.png", "happy.png"];
let currentEmoji = document.querySelector(".emoji");

rangeSlider.addEventListener("input", function(){
    let value = rangeSlider.value;
    if(value <= 20){
        currentEmoji.src = emojis[0];
    }
    else if(value<= 40 && value >20) {
        currentEmoji.src = emojis[1];
    }
    else if(value<= 60 && value >40) {
        currentEmoji.src = emojis[2];
    }
    else if(value<= 80 && value >60) {
        currentEmoji.src = emojis[3];
    }
    else if(value <= 100 && value >80) {
        currentEmoji.src = emojis[4];
    }
});