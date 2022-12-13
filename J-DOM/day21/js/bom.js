// console.log("BOM.js");
// // // window.alert("Hello");
// // console.log(window);
// // window.open("https://google.com", "Hello");
// // window.confirm("hello");
// // let result = window.confirm("Do you wanna to King?");
// // console.log(result);
// // let message = result ? "you click ok ":
// // "You click cancel";

// // alert(message);

// // //promt
// // window.prompt("give me a number");

// //set time out
let alertButton = document.getElementById("alertButton");
let cancelButton = document.getElementById("cancelButton");
let timeoutID;

alertButton.addEventListener("click", () => {
    console.log("alert button");
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo');
});
cancelButton.addEventListener("click", () => {
    console.log(timeoutID);
    window.clearTimeout(timeoutID);
})
console.log(timeoutID);

setTimeout(() => {
    console.log("Time out is running");
}, 5000)
let counter = 0;
// setInterval(startInterval, 1000);
let startMyTimer = document.getElementById("startTimer");
startMyTimer.addEventListener("click", runTimerInterval);

function runTimerInterval (){
    window.setInterval(startInterval, 1000);

}
setTimeout(() => {
    console.log("life runnig out move !");
    
}, 1000);

 function startInterval(){
    let now = new Date();
    let mytimer = document.getElementById("mytimer");
    mytimer.innerHTML = now;
    console.log(counter);
    counter++;
 }
