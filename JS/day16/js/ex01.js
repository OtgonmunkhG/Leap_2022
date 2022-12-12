


let num1 = Number(prompt("Give me a number"));
let num2 = Number(prompt("Give me a number"));

// if(x < y ){
//     console.log("bigger")
// }
// else{
//     console.log(not);
// }

function findMax(x, y){
    if(x < y ){
        console.log("y + `bigger than ` + x");
    }
    else{
        console.log("x + `bigger than ` + y");
    }
}

findMax(num1, num2);