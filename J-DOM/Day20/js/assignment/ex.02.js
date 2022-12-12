const x = document.forms["frm1"];
let value = "";

for(let i = 0; i < x.length; i++){
    value += x.elements[i].value ;
    if(value !== Number.isInteger()){
        document.getElementById("demo").innerHTML = "Тоо оруулна уу";
        // console.log("Тоо оруулна уу");
    }
}

// document.getElementById("demo").innerHTML = text;

// if(input !== Number.isInteger()){
//     console.log("Тоо оруулна уу!");
// }else if(input > 999){
//     console.log("Их байна");
// }
// else{
//     console.log("Бага байна");
// }