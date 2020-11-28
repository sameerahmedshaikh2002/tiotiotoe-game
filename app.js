let sign = 'X';
let firstPlayer = prompt("Type a first player");
let secondPlayer = prompt("Type a second player");


function calculate(value) {
    let thisValue = document.getElementById("r" + value);
    if (thisValue.innerText === "") {
        thisValue.innerText = sign;
        signChange();
        checkWinner();

    }
}

function signChange() {
    if (sign === "X") {
        sign = "O";
    } else {
        sign = "X";
    }


}

let r1 = document.getElementById('r1');
let r2 = document.getElementById('r2');
let r3 = document.getElementById('r3');
let r4 = document.getElementById('r4');
let r5 = document.getElementById('r5');
let r6 = document.getElementById('r6');
let r7 = document.getElementById('r7');
let r8 = document.getElementById('r8');
let r9 = document.getElementById('r9');

function checkWinner() {
    if (r1.innerHTML === 'X' && r2.innerHTML === 'X' && r3.innerHTML === "X" ||
        r1.innerHTML === 'X' && r4.innerHTML === 'X' && r7.innerHTML === "X" ||
        r1.innerHTML === 'X' && r5.innerHTML === 'X' && r9.innerHTML === "X" ||
        r4.innerHTML === 'X' && r5.innerHTML === 'X' && r6.innerHTML === "X" ||
        r7.innerHTML === 'X' && r8.innerHTML === 'X' && r9.innerHTML === "X" ||
        r7.innerHTML === 'X' && r8.innerHTML === 'X' && r9.innerHTML === "X" ||
        r2.innerHTML === 'X' && r5.innerHTML === 'X' && r6.innerHTML === "X" ||
        r3.innerHTML === 'X' && r6.innerHTML === 'X' && r9.innerHTML === "X"
    ) {
        alert(firstPlayer + ' ' + "is Winner");
    }
    else if (r1.innerHTML === 'O' && r2.innerHTML === 'O' && r3.innerHTML === "O" ||
        r1.innerHTML === 'O' && r4.innerHTML === 'O' && r7.innerHTML === "O" ||
        r1.innerHTML === 'O' && r5.innerHTML === 'O' && r9.innerHTML === "O" ||
        r4.innerHTML === 'O' && r5.innerHTML === 'X' && r6.innerHTML === "O" ||
        r7.innerHTML === 'O' && r8.innerHTML === 'O' && r9.innerHTML === "O" ||
        r7.innerHTML === 'O' && r8.innerHTML === 'O' && r9.innerHTML === "O" ||
        r2.innerHTML === 'O' && r5.innerHTML === 'O' && r6.innerHTML === "O" ||
        r3.innerHTML === 'O' && r6.innerHTML === 'O' && r9.innerHTML === "O") {
        alert(secondPlayer + ' ' + "is Winner")
    }
}

