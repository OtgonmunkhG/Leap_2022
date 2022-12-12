
// /function declaration - fun todorhoiloh

function f(){
    console.log("hello functions");
}
//function call - function duudah
// f (x) = x * x => parameter gadnaas awdag huwisagch

function f1 (x,y){
    console.log(Math.pow (x, 2) + Math.pow(y, 2));
}
f1(5,1);

function f2 (x, y){
    console.log(Math.pow(x, 2) + Math.pow(y, 2));
    console.log(Math.pow((x + y), 2))
}
f2(2, 3);

//3 
function E(m , c){
    console.log(m * Math.pow(c,2));

}
const C = 300000;
E(78, C);


//4
function factorial(x) {
    let multiplication = 1;
    for(let i = 1; i <= x; i++){
        multiplication = multiplication * i;
    }
    console.log(multiplication);
}
factorial(3);

//5
function f3 (x, y){
    console.log(Math.cos (x) - Math.sin (y));
}
f3(1, 2);


//6 
function f4 (x){
    console.log(Math.pow(x, 3) + Math.pow(x, 2) + x + 5 +12);
}
f4(3);

//7 
function f5(x){
    console.log(Math.pow(x , 2));
}
f5(7);


//9

function f6(x){
    console.log(Math.sqrt(x));
}
f6(8);

