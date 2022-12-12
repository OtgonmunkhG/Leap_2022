let rabbit1 = {
    color : 'white',
    rName: 'Chandaga',
    gender: 'male',
    age : 2,
    jump : function (){
        console.log("broke");
    },
    sayMyName: function(myName){
      console.log(`Your name is ${myName}`);
    }
}
console.log(rabbit1);
console.log(rabbit1.color);
rabbit1.color = "shavhai";
console.log(rabbit1);
rabbit1.jump()
rabbit1.sayMyName("Otgonmunkh");





let rabbit2 = {
    character : 'dogshin',
    tolbo: 'alag',
    from: 'Mongolia',
    general: 'nation',
    jump : function (){
        console.log("I can jump");
    }

}

console.log("here is rabbit 2 speaks");
console.log(rabbit2);
let rabbits = [ rabbit1, rabbit2];
console.log(rabbits);
rabbit2.jump();