// array at function


function findAt(arr, index) {
    return arr[index];
}

const array1 = [1, 2, 3, 4, 5,];
console.log(findAt(array1, 0));
console.log(findAt(array1, 4));

//array.at At
console.log(array1.at(0));  //index butsaah
console.log(array1.at(2));  //index butsaah

//concat arr1 = [1, 2, 3, ] arr2= [4, 5, 6, ]
function arrConcat(arr, arr2) {
    let concatedArray = []
    // array. push()
    for (let i = 0; i < arr2.length; i++) {
        concatedArray.push(arr2[i]);
    }

    return concatedArray;
}

let arrayC1 = [1, 2, 3,]
let arrayC2 = [4, 5, 6]
console.log(arrConcat(arrayC1, arrayC2));
console.log(arrConcat(arrayC2, arrayC1));




//array concat method 
console.log((arrayC1.concat(arrayC2)));
console.log(arrayC1 + arrayC2);

function arrayElementAdd(arr1, arr2) {
    let sum = []
    for (let i = 0; i < arr1.length; i++) {
        sum[i] = arr1[i] + arr2[i]
    }
    return sum;
}
console.log(arrayElementAdd(arrayC1, arrayC2));


//array icludes

//arr1 = [2, 4, 5] => 5-> true, 2 -> true 3 -false

let arrayIncludes = function (arr, number) {
    let found = false;

    for (let i = 0; i < arr.length; i++) {
        if (number === arr[i]) {
            found = true;

            break;
        }

    }
    return found;
    //daraaan return ".."; unshihgui
}
const arrayInc = [2, 4, 5];
console.log((arrayIncludes(arrayInc, 2)));
console.log((arrayIncludes(arrayInc, 5)));  //hylbar shalgah
console.log((arrayIncludes(arrayInc, 3)));

//array implicit function includes


console.log("array methods includes of array")
console.log((arrayIncludes(arrayInc, 2)));
console.log((arrayIncludes(arrayInc, 5)));
console.log((arrayIncludes(arrayInc, 3)));


// indexof


// arr1 = [ 1, 2, 3] => index/ => 2
//index oloh
let findIndex = function (arr, number) {

    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (number === arr[i]) {
            index = i;
        }
    }

    return index;
}
const arrIndex = [1, 2, 3];
console.log(findIndex(arrIndex, 3));
console.log(findIndex(arrIndex, 2));
console.log(findIndex(arrIndex, 10));
console.log("now it's is timem to test indexOf method of array ")
console.log(arrIndex.indexOf(3))
console.log(arrIndex.indexOf(2))
console.log(arrIndex.indexOf(10))

const animals = ["chono", "buhun", "temee", "nugas", "buhun"];
// console.log(animals.indexOf(buhun));
// console.log(animals.indexOf(temee));
// console.log(animals.indexOf(buhun));

console.log("join me function");

//arr1 = [1, 2, 3] => 123; //string

let funcJoin = (arr, symbol) => {
    let output = "";

    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            symbol = " "
        }
        output = output + arr[i] + symbol;
    }


    return output;
}
const arrayJoin = [1, 2, 3]
console.log(funcJoin(arrayJoin, "$"));
//dund n temdegt nemj bolno

console.log("array join method");
const jiguurten = ["Elee", "heree", "Galuu"];
console.log(jiguurten.join());
console.log(jiguurten.join(","));
console.log(jiguurten.join("-"));

//pop


// arr1 = [ 1, 2, 3] => pop [1, 2]
//hamgiin suuliin elementing remove hiih
let  popFunc = (arr) => {
   
    const lastIndex = arr.length -1 ;
    let poppedArray = []
    for(let i = 0; i < arr.length; i++){
        if(i != lastIndex){
            poppedArray.push(arr[i]);
        }
    }
    return poppedArray;
}


const poArray = [1, 2, 3]
console.log(popFunc(poArray));
console.log(popFunc([ 12, 4, 5, 6, 7]));


//hamgiin suuliin elementiig remove hiih
console.log("pop array method")
const poppArrayResult = [3, 4, 5]
poppArrayResult.pop();
console.log(poppArrayResult);

const poppExample = [1, 2, 3, 19];
poppExample.pop();
console.log(poppExample);

