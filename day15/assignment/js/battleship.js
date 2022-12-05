
let sheepColors = ["red", "white", "blue", "dark", "gray"];

console.log(sheepColors);
console.log(sheepColors[2]);

//game setup
// user should guess a number

// we need to create new ship on the board
// 0| 1| 2|3|4| 5| 6 |
// o| o| o|x|x| x| x |
let guesses = 0;

let isSunk = false;
let hit = 0;

// let location1 = 0; 
// let location2 = 1; 
// let location3 = 2; 


let locations = [true , true, true, false, false, false, false ];
let count = 0;
let max = 7;
for(let count = 1; count < locations.length; count++){
       
        console.log(locations[count]);
     }

// game loop
while(!isSunk ){
    console.log("game begins")
    guesses = guesses + 1;
    if(guesses > 6){
        console.log(guesses);
        break;
    }
    let userGuess = Number(prompt("give me"));
    if(userGuess > 0 && userGuess < 7){
    console.log(userGuess);
    if(locations[0] == userGuess || locations[1] == userGuess || locations[2] == userGuess){
        hit = hit + 1;
        //if you hit the location1
        if(locations[0] = userGuess){
            locations[0] = -1;
        }
        if(locations[1] = userGuess){
            locations[1] = -1;
        }
        if(locations[2] = userGuess){
            locations[2] = -1;
        }
        else{
            alert("give me numbers between 0 and 6");
        }
        
        
    }
    else if(locations[0] === userGuess || locations[1] === userGuess || locations[2] || userGuess){
        console.log("you won");
    }
  
   
    console.log(hit);
    if(hit === 3){
        isSunk = true;
    }
    
    
}
}
console.log("game ends");