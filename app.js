let sign = 'X';
let r1 = document.getElementById('r1');
let r2 = document.getElementById('r2');
let r3 = document.getElementById('r3');
let r4 = document.getElementById('r4');
let r5 = document.getElementById('r5');
let r6 = document.getElementById('r6');
let r7 = document.getElementById('r7');
let r8 = document.getElementById('r8');
let r9 = document.getElementById('r9');


function calculate(value) {
    if (value.innerText === "") {
        value.innerText = sign;
        checkSign();
    }
}
function checkSign() {
    if (sign === "X") {
        sign = "O";
    } 
    else {
        sign = "X";
    }
}

     