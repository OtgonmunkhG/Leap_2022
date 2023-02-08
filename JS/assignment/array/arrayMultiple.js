console.log("Hello");

let arr1 = [3, 45, 23, 78, 34];

let arr2 = [4, 2, 34, 4, 12, 1];
let arr3 = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr1[i] != arr2[i]) {
    arr1.push(1);
  }
  arr3.push(arr1[i] * arr2[i]);

  console.log(arr3);
}
