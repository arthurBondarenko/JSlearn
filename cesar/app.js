document.getElementById("message").addEventListener("input", function(){
    let istValue = this.value;
    document.getElementById("output").textContent = ceasarsCipher({
        msg: istValue,
        shift: document.getElementById("shift").value
    });
});

document.getElementById("shift").addEventListener("keyup", function(){
    let itsValue = this.value;
    document.getElementById("output").textContent = ceasarsCipher({
        msg: document.getElementById("message").value,
        shift: itsValue
    });
});

document.getElementById("output").textContent = ceasarsCipher({
    msg: document.getElementById("message").value,
  shift: document.getElementById("shift").value
});





function ceasarsCipher(obj) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLocaleLowerCase();
    let otherCharacters = '-=~\"\'#$%&*^:<>?/!{(|)}.1234567890\, ' ;


    let OUTPUT = "",
    STRING,
    shiftAmount,
    shiftedAlphabet;

    if(typeof obj == "object") {
        shiftAmount = obj.shift;
        STRING = obj.msg.toLocaleLowerCase();
    }else {
        return;
    }

    if(typeof STRING === "string" || typeof(STRING + "") === "string" ){
        shiftedAlphabet = alphabet.slice(shiftAmount);
        shiftedAlphabet += alphabet.slice(0, shiftAmount);
        shiftedAlphabet += otherCharacters;
        alphabet += otherCharacters;
        for( i = 0; i< STRING.length; i++){
            let NUMBER = alphabet.indexOf(STRING[i]);
            OUTPUT += shiftedAlphabet[NUMBER]; 
        }
    }else {
        return;
    }

    return OUTPUT;


}