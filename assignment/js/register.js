console.log("register number");

const registerNumber = prompt("Please give me your register number");

const firstNumber = registerNumber.substr(0, 2)
const numbers = registerNumber.substr(2, 9);
console.log(registerNumber.length);

    if(Number(firstNumber) !== NaN && numbers === Number && registerNumber.length == 10 ){
        console.log("your register number is correct");
    }
    else{
        console.log("Your register number is incorrect");
    }
