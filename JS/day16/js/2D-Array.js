//problem 

// example





// 2 tic tac toe

//col1| col2 | col3|
// | x | o | x | => row1
// | o | o | x | => row2
// | x | x | x | => row1


let row1 = ["x" , "o", "x"];
let row2 = ["o" , "o", "x"];
let row3 = ["x" , "x", "0"];
console.log(row1);
console.log(row2);
console.log(row3);

let tictactoe = 
[  ["x" , "o", "x"], 
   ["o" , "o", "x"], 
   ["x" , "x", "o"] 
];
console.log(tictactoe);
console.log(tictactoe[1]);
console.log(tictactoe[1][1]);

tictactoe[0] [1] = "x";

//input eer tuhain tictactoe iin baganii bolood muriig indexiig daraaluulj awaad 3 dahi udaad n yugaar solihiig n ugnu

let row = Number(prompt("give a number"));
let col = Number(prompt("give me a number"));
let value = (prompt("give me a number"));

tictactoe[row][col] = value;




console.log("for loop with for loop")
//tictactoe buh murnii elementuudiig hewlej haruul
for(let i = 0; i < tictactoe.length; i++){
    // console.log(tictactoe[i]);
    //double FOR loop 
    let output = ""
    for(let j = 0; j < tictactoe[i].length; j++){
        output = output + "|" +tictactoe[i][j]  + "|" ;
        
    }
    console.log(output);
}



