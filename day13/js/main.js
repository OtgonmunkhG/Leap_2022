

//day 13

//Math PI

console.log(Math.PI);

//.toFixed buhleer awah
console.log(Math.PI.toFixed(2));

//toog hargdah baidal
const budge = 1_000_000_000;
console.log(budge);

const degrees = 45;
let rad = degrees * (Math.PI / 180);
console.log(rad.toFixed(4));

//Math.absolute modul

let a = 5, b = 9;
const diff = Math.abs(a - b);
console.log(diff);


//math.ceil oiroltsoo utga deeshee buhel utga awna

console.log(Math.ceil(.95));
console.log(Math.ceil(4));
console.log(Math.ceil(7.004));
console.log(Math.ceil(-7.004));


//dooshoo utga Math.floor
console.log(Math.floor(5.95));
console.log(Math.floor(5.05));
console.log(Math.floor(5));
console.log(Math.floor(-5.05));

//0.5 dunduur


console.log(Math.round(0.9));
console.log(Math.round(5.95), Math.round(5.5));
console.log(Math.round(0.9));


//Math.max ih utgiin

console.log(Math.max(1, 3, 2));

//Math.min
console.log(Math.min(1, 3, 2));

//Math.pow zereg
console.log(Math.pow(7, 3));   //7iin 3 zererg
console.log(Math.sqrt(45));  //yzguur


const y = Number(prompt("Please give me y"));
const z = Number(prompt("Please give me z"));
console.log(Math.sqrt((Math.pow(y, 2) + Math.pow(z, 2))));


//Math.random 0 - sanamsargui

console.log(Math.ceil(Math.random()* 6 ));



// const A = Number(prompt("Please give me number"));
// const B = Number(prompt("Please give me number"));
// console.log(Math.max(A, B));
// console.log(Math.min (A, B));
// console.log(Math.ceil(Math.random() * (Math.max(A, B) - Math.min (A, B)) + Math.min (A, B)));
// let countA = 1;
// let howMany = prompt("Howmany times?")
// console.log('loop starts');
// while ( countA<= Number(howMany)){
//     console.log(Math.ceil(Math.random() * (Math.max(A, B) - Math.min (A, B)) + Math.min (A, B)));
//         countA = countA + 1;
    
// }

// console.log('loop ended');


//number-sum 
// let d = (prompt("Give me d"));
// console.log(d.length);
// console.log(Number(d.charAt(0)));
// console.log(Number(d.charAt(1)));
// console.log(Number(d.charAt(2)));
// console.log(Number(d.charAt(0)) + Number(d.charAt(1)) + Number(d.charAt(2)));



//loop while


// let count = 1;
// console.log('loop starts');
// while (count <= 10){
//     console.log(count)
//         count = count + 1;
    
// }

// console.log('loop ended');


//herwee count = count + 1 bichihgui bol INFINETE (forever) loop gedeg zuiltei tulgarna.




// let answer = "Yes";
// console.log("loop starts")
// while(answer == "Yes"){
//     answer = prompt("Та тоглоом үргэлжлүүлэх үү?, Yes Or No").toLocaleLowerCase();
//     if (answer == "Yes"){
//         alert("Thanks");
//     }
// }

// console.log("Game over");
// console.log("loop ended");



let g = Number( prompt("give number"));
let count = 1;


let sum = 0;
console.log("loop start");
while (count <= g){
    // console.log(count)
        count = count + 1;

        sum = sum + count - 1;
        console.log(sum);
}


// g = 10 , count = 0 , sum = 0 
// // interation 1: count = 0
// count = count + 1; //1
// sum = sum + count; // 0 + 1 = 1
// console.log(count); //1
// console.log(sum); //1


// // interation 2 : 
// count = 1, sum = 0
// count = count + 1 ; // 2
// sum = sum + count + 1; //2
// console.log(count);
// console.log(sum); 
//interaction 3
// count = 2, sum = 0;
// count = count + 1; //3
// sum = sum + count; //3
// console.log(count);
// console.log(sum);


//interaction 3 :
// count = 3; sum = 0;
// count = count + 1; //4
// sum = sum + count; //4
// console.log(count);
// console.log(sum);
//interaction 4:
// count = 4, sum = 0;
// count = count + 1; //5
// sum = sum + count; //5
// console.log(count);
// console.log(sum);

// //interaction 5:

// count = 5, sum = 0;
// count = count + 1 ; //6
// sum = sum + count ; //6
// console.log(count);
// console.log(sum);


// // interaction 6:
// count = 6, sum = 0;
// count = count + 1 ; //7
// sum = sum + count ; //7
// console.log(count);
// console.log(sum);

// //interaction 7:
// count = 7, sum = 0;
// count = count + 1 ; //8
// sum = sum + count; //8
// console.log(count);
// console.log(sum);

// // interaction 8:
// count = 8, sum = 0;
// count = count + 1; //9
// sum = sum + count; //9
// console.log(count);
// console.log(sum);

// //interaction 9 :
// count = 9, sum = 0;
// count = count + 1; //10
//  sum = sum + count; //10
//  console.log(count);
//  console.log(sum);

//  //interaction 10 :
//  count = 10, sum = 0;
//  count = count + 1; //11
//  sum = sum + count; //11
//  console.log(count);
//  console.log(sum);





















