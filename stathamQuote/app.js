let quote = document.getElementById("quote");
let btn = document.getElementById("btn");


let quotes = [
"Когда меня рожали собственно,тогда я и родился",
"Жопу поднял - место потерял",
"Хозяйство вести не хером трясти",
"Наша жизнь летит в Пиздень, счастья нет,всем Добрый день",
"Я знаю,что ничего не знаю",
"Машина без колёс не едет",
"Чтобы съесть бутерброд его нужно сделать",
"Стою в пробке смотрю на попки",

];

window.onload = function() {
btn.addEventListener("click", () => {
    quote.innerText = "";
    let randQuote = Math.floor(Math.random() * Math.floor(quotes.length));
    quote.innerText = quotes[randQuote];

});
};