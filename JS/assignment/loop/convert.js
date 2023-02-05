// const synop = "Hello World"
// console.log(synop.charAt(0));
// console.log(synop.length);
// let count = 0;
// // console.log(synop.toLowerCase());
// while(synop.length > count ){
//     let firstAlphen = synop.charAt(0)
//     let parag = synop.substr(1 , 4)
//     let second = synop.charAt(6)
//     let last = synop.substr(7, 11)
//     console.log(firstAlphen.toLocaleLowerCase() + parag.toUpperCase() + " " +  second.toLocaleLowerCase() + last.toUpperCase());
//     count++

// }

let convert = prompt("Add string", "Hello world");
let tom = "";
let jijig = "";
let count = "";
let word = "";
for (let i = 0; i < convert.length; i++) {
  jijig = convert[i].toLocaleLowerCase();
  tom = convert[i].toUpperCase();
  count = convert[i];

//   if(convert[i] === count.charAt(0) || convert.substr(1, 4) === count.substr(1, 4) ) {
//     let first = count.charAt(0).toLowerCase()
//     let second = count.substr(1, 4).toUpperCase()
//     console.log(first, "+" , second)


//   }
    word = jijig.slice(-1, -5)
    count = tom.slice(-1, -5)
    console.log(word, count)
    console.log(count)
    // break;
//   console.log(jijig.slice(0) ,"+", tom.slice(1, 4))
//   if (convert[i] === tom) {
//       console.log(tom);
    
//   }
//   console.log(convert.length);
  // let lowerLetter = convert[i].toLowerCase()
  // console.log(lowerLetter)
  // if(convert.charAt(0) )
}
