//exercise 9
// const a = prompt("Please give me number");
// let count = 0;
// sum = 0;
// console.log(a.length);

// // while(count < a.length){
// //     console.log(a.charAt(count));
// //     count = count + 1;
// //     sum = sum + Number(a.charAt(count));
// // }
// console.log(sum);
// for(let count = 0;  count< a.length; count++){
//     console.log(sum);

// }

//number
sum = 0;
let rem = 0;
// let n = Number(prompt("give me number"));
// while(n > 0){
//     rem = n % 10;  //uldegdel
//     sum = sum + rem;
//     n = Math.floor(n / 10);

// }
// console.log(sum);


//ehnii utga, uurchlult , davtamj

//console.log(Math.floor(123/100)) 12 buhel utga
n = Number(prompt("give me number"));
for( ; n > 0;  ){
    rem = n % 10;
    sum = sum + rem;
    n = Math.floor(n / 10)
    
}
console.log(sum);
