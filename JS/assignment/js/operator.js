let number = prompt("Please give me your phone number");

console.log(number.length);

let first = number.charAt(0);
let second = number.charAt(1);
console.log(first, second);

if (second == 9 && first == 9 && number.length == 8) {
    console.log("Mobicom");
} else if (second == 8 && first == 8 && number.length == 8) {
    console.log("Unitel");
} else if (second == 8 && first == 9 && number.length == 8) {
    console.log("G-Mobile");
} else if (second == 0 && first == 9 && number.length == 8) {
    console.log("Skytel");
} else {
    console.log("Таны дугаар буруу байна дугаараа шалгаад дахин оруулна уу!");
}