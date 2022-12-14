console.log("day22");
//callback function
function add(x, y){
    return x + y ;
}
function print(f){
    let x = 2;
    let y = 3;
    console.log(f(x, y));
}
print(add);
let x = () => {
    console.log("arrow function");
}
// x();
//milcek
setTimeout (l => {
    console.log("x");
}, 2000)

//setInterval
function startInterval() {
    let now = new Date();
    let myTimer = document.getElementById("mytimer");
    myTimer.innerHTML = now;

}