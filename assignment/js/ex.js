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
let newArray = array.slice(0, 6)
console.log(newArray);





//middle

newArray.splice(2, 2);
console.log(newArray);


newArray.pop();
console.log(newArray);
let remove = newArray.splice();
console.log(remove);










