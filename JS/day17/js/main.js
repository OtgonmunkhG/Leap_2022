function pow(number, exponent){
    let multiply = 1;
    for(let i = 1; i <= exponent; i++){
        multiply = multiply * number;
    }

    return multiply;
}
let result = pow(2, 3);


console.log(result);
console.log(pow(5, 8));

//ex01


function findMin (x, y){

    if(x < y){
        return x;
    } else{
        return y;
    }
}

findMin (5, 6);
console.log(findMin(5, 6));


function printArray(arr){

    for(let i = 0; i < arr.length; i++){
       console.log(arr[i]);
    }
}

let myArray = [1, 2, 3, 4, 5, 6]
printArray(myArray);


let findArrayMax =  function(arr) {
     let max = -1;
    for(let i = 0; i < arr.length; i++){
        if(max <= arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findArrayMax(myArray)); //=>6


///ex4

let findArrayAverage = (arr) =>{
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
       sum = sum + arr[i];

    }
    const average = sum / arr.length;
    return average;

}
console.log(findArrayAverage(myArray));

function findOntsDund(points){
    
    if(points < 60){
        return "Very bad";

    } else if(points >= 60 && points < 70){
        return "satistied";
    }
     else if(points >= 70 && points < 80){
        return "Average";
    }
     else if(points >= 80 && points < 90){
        return "Good";
    }
     else if(points >= 90 && points < 100){
        return "very bad";
    }
    else{ 
        return"Please give me  points between 0 and 100";
    }
}

let inputPoint = Number (prompt("Please give me student points"));
let studentName = (prompt("Please give me student name"));
let pointResult = findOntsDund(inputPoint);
console.log(`${inputPoint} - ${studentName} - ${pointResult}`);