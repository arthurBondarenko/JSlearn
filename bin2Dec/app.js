const input = document.getElementById("input");
const output = document.getElementById("output");
const errorField = document.querySelector(".error");



function validate(text = '') {
    if(/[a-zа-я]/gi.test(text)){
        errorField.textContent = "Ваша последовательность содержит буквы"
        return false;
    }

    if(/[2-9]/g.test(text)){
         errorField.textContent = "Последовательность либо 1 либо 0";
         return;
    }

    return true;

}

function convert(sequence = "") {
    const splitted = [...sequence];
    const sequenceLength = splitted.length;

    let result = 0;

    for(let i = sequenceLength - 1; i >= 0; i-- ){
        const digit = Number(splitted[sequenceLength - i - 1]);
        result += digit * Math.pow(2, i)
    }
    return result;
}

input.addEventListener("input", ({target: { value } }) => {
    if(validate(value)){
        errorField.textContent = "";
       const result = convert(value);
       output.value = result;
    }
    else {
        output.value = "";
    }
})






