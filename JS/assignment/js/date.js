const year = Number(prompt("Please give me current year"));
let month = prompt("Please give me special month of your");
let day = prompt("Please give me special day");
console.log(month.length);
if(month.length == 1 && day.length == 1) {
    month = "0" + month;
    day = "0" + day;
    console.log(year + month + day);
    
}

let arr = [year, month, day];
console.log(arr.join("-"));