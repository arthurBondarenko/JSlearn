const slider = document.querySelectorAll(".slider-item");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

slider.forEach(function(slider, index ) {
    slider.style.left =`${index * 100}%`
});

let counter = 0;

btnNext.addEventListener("click", function(){
    counter++;
    carousel();

});
btnPrev.addEventListener("click", function(){
    counter--;
    carousel();
});




function carousel() {
    if(counter=== slider.length){
        counter = 0;
    }
    if(counter < 0){
        counter = slider.length - 1;
    }

    slider.forEach(function(slider){
        slider.style.transform = `translateX(-${counter * 100}%)`;
    });
}