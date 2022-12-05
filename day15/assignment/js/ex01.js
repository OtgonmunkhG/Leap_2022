//given number of array = 1, 2 , 3, 4, 5, 6, 7, 8

//let's find out which numbers are even 
// if the number is even, then print out the number 
//you have to use for loop

let sequeren = [1, 2, 3, 4, 5, 6, 7, 8 ];
console.log(sequeren);

//utgiin uurciluh
sequeren[3] = 6;
console.log(sequeren);

let playerNames = ["salah", "mana", "becker", "diaz"];
console.log(playerNames);
playerNames [1] = "otgoo";
console.log(playerNames);

for(let i = 0; i < sequeren.length ; i++){
    
    if(sequeren[i] % 2 == 0){
        console.log(sequeren[i]);
    }
   
}

let OfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let max = -1;

for(let i = 0; i < OfNumbers.length; i ++){
    if(max <= OfNumbers [i]){
        max = OfNumbers[i];
        console.log(max);
    }
}

let min = 0;
for(let l = 0; l < OfNumbers.length; l++){
    if(min >= OfNumbers [l]){
       min = OfNumbers [l];
       console.log(min);
    }
}


sum = 0;
for(let a = 0; a < OfNumbers.length; a++){
    sum = sum + OfNumbers[a];
    console.log(sum);
    OfNumbers [a] 
}

 

//given number if arrays = 1, 2, 5, 6, 7, 8
//output new arrays = 2, 3, 6, 4, 6, 7, 8, 9
//arrray item value change 
//use of for loop
let arrays = [1, 2, 5, 3, 5, 6, 7, 8];
console.log(arrays);

for(let b = 0; b < arrays.length; b++){
    arrays [b] = arrays[b] + 1;
   console.log(arrays[b]);
   

}

for(let c = 0; c < arrays.length; c++){
    arrays [c] = arrays [c] * 2;
    console.log(arrays[c]);
}




