function howDoesTheFoxSay(array, animalType){
    for(let i = 0; i <array.length; i++){
        if(array[i].type === animalType){
            console.log(`${array[i].sound} ${array[i].sound} ${array[i].sound} `);
        }
        
        console.log(array[i].type);
        
    }
}


let animals = [
    {
        type: "dog" , 
        sound: "woof"
    }, 
    {
        type:"cow" ,
        sound: "moo" 
    }, 
    {
        type: "cat",
        sound: "meow"
    }
]
console.log("Dog barking");
howDoesTheFoxSay(animals, "dog");
console.log("cow mooing");
howDoesTheFoxSay(animals, "cow");
console.log("cat meowing");
howDoesTheFoxSay(animals, "cat");


function findOlderStudents(array){
    for(let i = 0; i < array.length; i ++){
        
        console.log(array[i].birthOfYear);
        
        
        

       
    }

    
}
function findAges(array){
    for(let i = 0; i < array.length; i++){
        let age = 2022 - array[i].birthOfYear;
        if(age >= 20){
            console.log(age);
        }
    }
}
function findStatus(array){
    for(let i = 0 ; i < array.length; i++){
        if(array[i].single == true){
            console.log(array[i].single);
        }
    }
}

const students = [
    {
        name: "Otgoo" , 
        birthOfYear: 2005 , 
        hobby: 'dance' ,
        single : true , 
        lastName: 'Gerelbaatar' 

        
    },
    {
        name: "Anna" , 
        birthOfYear: 2000 , 
        hobby: 'sleep' ,
        single : true , 
        lastName: 'Goerge' 

        
    },
    {
        name: "Nomin" , 
        birthOfYear: 2002 , 
        hobby: 'cycling' ,
        single : false , 
        lastName: 'Dondog' 

        
    }
]
findOlderStudents(students);
findAges(students);
findStatus(students);
