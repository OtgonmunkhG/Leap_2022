

function f (number1, number2){
    console.log(Math.max(number1, number2));
} 
// f(23, 45);
f( Number(prompt("Give me a number")), Number(prompt("Give me a number")) );
// let number1 = Number(prompt("Give me a number"));
// let number2 = Number(prompt("Give me a number"));



//ex02


// console.log(array.includes(56));
let arrayIncludes = function (arr, number) {
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (number === arr[i]) {
            found = true;

            break;
        }

    }
    return found;
    //daraaan return ".."; unshihgui
}
const array1 = [78, 56, 12, 0];

console.log((arrayIncludes (array1 , 56)));
// console.log(array.indexOf(56));