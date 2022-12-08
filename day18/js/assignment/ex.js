//ex01 js methods

const shoppingCard = ['Milk', 'Coffee', 'Tea', 'Honey'];
// let index = 0;
// for(let i = 0; i < shoppingCard.length; i++){
    

// }
if(shoppingCard.indexOf("Meat")){
    console.log(shoppingCard.unshift("Meat"));
}
console.log(shoppingCard);


if(shoppingCard.indexOf("Sugar")){

    console.log(shoppingCard.push("Sugar"));
}

console.log(shoppingCard);


if(shoppingCard.includes("Honey")){
   shoppingCard.pop("Honey");

}
console.log(shoppingCard);

shoppingCard[3] = "Grean Tea";
console.log(shoppingCard);


//ex02

let array = [ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon" ];
array.sort();
console.log(array);

//reversed
let arrayReverse = array.reverse();
console.log(array);

//remove pop
console.log(array.splice(0, 6));




//middle

let middle = array.length / 2;
if(array.length % 2 == 0){
    array.splice(middle - 1, 2);
    console.log(middle);
    
} else{
    array.splice(middle, 1);
}
console.log(array);






