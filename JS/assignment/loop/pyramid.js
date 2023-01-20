

let row = 0;
while (row < 5) {
  let count = 0;
  let output = "";
  while (count < 5 - row) {
    output += " ";
    count++;
  }
  count = 0;
  while (count < (2 * row) + 1) {
    output += "*";
    count++;
  }
  console.log(output);
  row++;
}