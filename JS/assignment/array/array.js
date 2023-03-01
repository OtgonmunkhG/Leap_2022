console.log("arrays")
let arr = [4, 5, 1, 7, 2, 1];
let array = [4, 1];

for(let i = 0; i < arr.length; i++) {
    if(array[i] === arr[i]) {
        console.log(array[i]); 
    }
    else {
        continue;

    }
}