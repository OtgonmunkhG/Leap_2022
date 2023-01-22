let n = Number(prompt("Please give me a number"))
let a = 2;
let output = false;
while( a < n && n % a != 0 ){
    output = true;
    a++
}
console.log(output);

// do{console.log("number is palindromic")}
// while(a < n && n / a == 0) 