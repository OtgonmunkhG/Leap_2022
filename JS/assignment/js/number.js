const number = (prompt("please give your phone number"));
let type = typeof number;
console.log(type);
let length = number.length;
console.log(length);
let half = number.substr(0, 4);
console.log(half);
if(typeof number == Number || number.length == 12 || half == +976) {
    console.log(" та монгол улсын утасны дугаарыг зөв орууллаа ");
} else {
    console.log("та монгол улсын утасны дугаарыг буруу орууллаа");
}