const synop = "Hello World"
console.log(synop.charAt(0));
console.log(synop.length);
let count = 0;
// console.log(synop.toLowerCase());
while(synop.length > count ){
    let firstAlphen = synop.charAt(0)
    let parag = synop.substr(1 , 4)
    let second = synop.charAt(6)
    let last = synop.substr(7, 11)
    console.log(firstAlphen.toLocaleLowerCase() + parag.toUpperCase() + " " +  second.toLocaleLowerCase() + last.toUpperCase());
    count++
    
}
