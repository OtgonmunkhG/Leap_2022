let input = Number(prompt("Give a number prime"));
// let isPalindromic = true;
let temp = 0; //stepbystep


for(let i = 2; i < Math.round(input / 2); i++){
    if(input % i == 0){
        temp = temp + 1;


    }
}
console.log(temp);
if(temp == 0){
    console.log("Its prime number");
} else{
    console.log("It's a not prime number");
}


