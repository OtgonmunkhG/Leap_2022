let iii = 4 < 3; //false
let ii = 4 >= 3; //true
let iv = 4 <= 3; // false
let v = 4 == 4; //true 
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //true
let x = 4 == "4"; //true
let xi = 4 === "4"; //false


let one = 4 > 3 && 10 < 12; console.log("true", one);
let two = 4 > 3 && 10 > 12; console.log("false", two);
let three = 4 > 3 || 10 < 12; console.log("true", three);
let four = 4 > 3 || 10 > 12; console.log("true", four);
let five = !(4 > 3); console.log("false", five);
let six = !(4 < 3); console.log("true", six);
let eight = !(4 > 3 && 10 < 12); console.log("false", eight);
let nine = !(4 > 3 && 10 > 12); console.log("false", nine);
let ten = !(4 === "4"); console.log("true", ten);


let myAge = 17;
let yourAge = Number(prompt("give me your age"));
if(myAge < yourAge) {
    console.log("бидний насыг харьцуулахад таны нас", yourAge , "Буюу та хөгшин байна");
} else{
    console.log("Би хөгшин", myAge);
}
let weekend = prompt("give me day")

switch(weekend) {
    case "monday ":
    case "tuesday":
    case "wednesday":
    case "tursday":
    case "friday":
        console.log("they're all weekdays");
        break;
    case "sanday":
    case "sunday":
        console.log("it's weekend days");
}