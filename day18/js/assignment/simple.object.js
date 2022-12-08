let dog1 = {
    action: "walk",
    name: "Anna ",
    color: "brown" , 
    age : 1 ,
    character: "grunt" , 



}

console.log(dog1);
console.log(dog1.action);
console.log(dog1.name);
console.log(dog1.color);
console.log(dog1.age);
console.log(dog1.character);

//animals
let animals = [{type: "dog", sound: "woof"}, {type: "cow",sound: "moo"},{type: "cat",sound: "meow"}]
let dog = {
    type:"dog" , 
    color: "black" , 
    sound: function (){
     console.log("woof , woof");
    }

}
console.log(dog);
dog.sound();


let cow = {
    type: "cow" ,
    color: "forb" ,
    sound: function (){
        console.log("moo, moo , moo");
    }
}
console.log(cow);
dog.sound();

let cat = {
     type: 'cat',
     color: "green",
     sound: function (){
        console.log("meow, meow, meow");
     }
}
console.log(cat);
cat.sound();