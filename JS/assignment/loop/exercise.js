const arr = [1, 2, 3, 4, 1];

function filterNumbers(array, number) {
  return array.filter((a) => a === number);
}
function findNumber(arr) {
  for (let i = 0; i < 10; i++) {
    const result = filterNumbers(arr, i);
    console.log(i, "--", result.length);
    console.log("-----");
    console.log(result.length);
    console.log("----");
  }
}
console.log(findNumber(arr));
