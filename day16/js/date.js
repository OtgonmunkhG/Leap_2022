//date methods


console.log("date his her");

//now
let now = new Date();
console.log(now);

//computer toolj ehelsen udur
let Jan01_1970 = new Date (0);
console.log(Jan01_1970);

let Dec31_1969 = new Date(-24 * 3600 *1000);
console.log(Dec31_1969);

let date = new Date("2017-01-26");
console.log(date);

let Dec31_2022 = new Date("2022-12-31");
console.log(Dec31_2022);

console.log((Dec31_2022 - now) );

let difference = Dec31_2022 - now;
let time = new Date(difference);
console.log(time.getDate());

