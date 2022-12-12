console.log("events");
let myButton = document.getElementById("myButton");
console.log(myButton);



let color = "white";
// myButton.style = `background-color: ${color}`;
function changeBackgroundColors (){
    console.log("clicked");
    if(color === "white "){
        myButton.style = `background-color: green `;
        color = "green";
    } else{
        
        myButton.style =`background-color: white`;
        color = "white";
    }

}
myButton.style =`background-color: ${color}`;
// function changeColors(){
//     console.log("clicked");
//     if(color === "green"){
//         myButton.style = `background-color: ${color}`;
//         color = "white";
//     } else{
//         myButton.style =` background-color: ${color}`;
//         color = "green";
//     }
// }
// myButton.addEventListener("click", changeColors);
//bagshiin codiig harna uu!




    // // changeBackgroundColor();
    // // myButton.addEventListener("click", changeBackgroundColorGreen);

    // let click = myButton.addEventListener("click", changeBackgroundColorGreen);
    // // let doubleClick = myButton.addEventListener("click", changeBackgroundColorWhite);
  
// let arrowFunc = () => {

// }
// myButton.addEventListener("click", () => {
//     myButton.style ="background-color: red;"
// } )


// let registerButton = document.querySelector("#register");
// console.log(registerButton);
// registerButton.disabled = true;
