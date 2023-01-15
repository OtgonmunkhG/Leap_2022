
const year = Number(prompt("please give me year"));
if(year % 4 == 0 && year % 400 == 0 ) {
    
        console.log("өндөр жил мөн");
     
} else if(year % 100 == 0) {
    console.log("өндөр жил биш");
} else {
    console.log("something wrong");
}