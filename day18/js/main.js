console.log("array methods");

//shift pop ester

//arr1 = [1, 2, 3] => shift (arr1) => [2,3]
let shiftArr = (arr) => {
    let tempArray = []
   for(let i = 0; i <= arr.length; i++){
     if(i != 0){
        tempArray.push(arr[i])
     }

   }
   return tempArray;
}



let arr1 = [ 1, 2, 3, 4, 5];
console.log(shiftArr(arr1));

console.log("array shift methods");

 const arr = [1, 2, 3,];
 const firstElement = arr.shift();
 console.log(arr);
 console.log(firstElement);

 console.log("unshigt array al");

 //utga nemeh
 let unshigtArray = function (arr, number ){
    let tempArray = [];
    tempArray.push(number);
  for(let i = 0; i < arr.length; i++){
    tempArray.push(arr[i]);
  }

  return tempArray;
 } 



 let arr2 = [5, 6, 7];
 console.log(unshigtArray(arr2, 6));

 console.log("unshift methods");
 const array1 = [1, 2, 3];
 console.log((array1.unshift(4)));
 console.log(array1);
//sort
let sortArray = [1, 2, 8, 7, -1, 10];
let max = -999;
sortArray[0] = sortArray[4];
let temp = sortArray[0];
sortArray[4] = temp;
console.log(sortArray);


sortArray = [ 1, 2, 8, 7, -1, 10];
console.log(sortArray);
function sortingAlgorithm(arr){

    for(let i = 0; i <= arr.length - 2; i++){
        let indexMIn = i;
     for(let j = i +1; j < arr.length - 1; j ++ ){
        if(arr[j] < arr[indexMIn]){
            indexMIn = j;
        }
     }
     let temp = arr[i];
     arr[i] = arr[indexMIn];
     arr[indexMIn] = temp;


    }
    return arr;
}
console.log("testing");
//sortArray = [ 1, 2, 8, 7, -1, 10];
//ineration i = 0/ [-1, 2, 8, 7, 1,10]
//ineration i = 1/ [-1, 1, 8, 7, 2,10]
//ineration i = 0/ [-1, 1, 2, 7, 8,10]



console.log(sortingAlgorithm(sortArray));


console.log("array sort");
 const names = ["Marlaa", "Javkhaa", "Javkhlan", 'Dorj'];
 names.sort();
 console.log(names);

 ///reverse
 function arrayReverse (arr){
  let tempArray = [];
  for(let i = arr.length - 1; i >= 0;  i-- ){
    tempArray.push(arr[i]);

  }
  return tempArray;
 }
 let arrReverse = [4, 5, 1, 8];
 console.log(arrReverse);

 const numbers = ['one ', 'two', 'three'];
 console.log("array1:", numbers);
 const reversed = numbers.reverse();
 console.log("reversed:", numbers);


 //slice
 const nameSlice = ['bat ', 'dorj', 'purew', 'davaa', 'tomor'];

 console.log(nameSlice.slice(2));
 console.log(nameSlice);


 function nameSliceFunc (arr, index){

    // let tempArray = [];
    // for(let i = index; i < arr.length; i++){
    //   tempArray.push(arr[i]);
    // }
    // return tempArray;
    for(let i = 0; i < index; i++){
        arr.shift()
    }
    return arr;
    

 }
 console.log(nameSliceFunc([1, 2, 3 ,4 ,5], 1)); //[3, 4, 5]



//splice   indexeer nemj hasaj boldog
console.log("splice method");
const spliceNames = [ "Davaa ", 'Lkhagwa', 'Purev', "Byambaa" ];
spliceNames.splice(1, 0, 'Maygmar');
//1 deh index deer shine utga nemeh
console.log(spliceNames);
//add "baasan "
spliceNames.splice(4, 0, "Baasan");
console.log(spliceNames);
// spliceNames.splice(1, 2, "Maygmar")
// console.log(spliceNames);

spliceNames.splice(6, 0, "Nym")
console.log(spliceNames);



