// let a = "hi";
// let b = "hi";

// console.log(a < b);

// console.log(a == b);
// console.log(a === b);   


// let c = 10;
// let d = '10';
// console.log(c == d);
// console.log(c === d);
// console.log(c !== d); 
// let e = true;
// let f = false;

// console.log(e < f);
// console.log(e > f);


// let result = 10;
// if (result < 10){
//     console.log('more than 10');
// } else {
//     console.log('less than 10')
// }

// result > 10 ? (result < 11 ? console.log("test") : console.log('hi')) : console.log('less than 10');

// const tip1 = 3000;
// const tip2 = 27500;
// const tip3 = 100000;

// if(5000 >= tip1 && 30000 <= tip1 ){
//     console.log('')
// }

// let tipResult1 = (3000 <= tip1 && 1000 <= tip1)


// let tipResult2 = (5000 <= tip2 && 30000 <= tip2) ? tip2 * 0.15 + tip2: tip2 * 0.2 + tip2;
// console.log(tipResult2);

// const input = Number(prompt('Give me your money'));
// const numberInput = Number(input);

// let exTipResult = (5000 <= numberInput && 30000 <= numberInput) ? numberInput * 0.15 + numberInput: numberInput * 0.2 + numberInput;


// const studentPoint = Number(prompt('give me your score'));
// const studentName = prompt("give me your student name");

// let studentResult = 'Маш муу';

// if(studentPoint < 60){
//     alert(studentName + ' - ' + studentPoint + ' - ' +
//         "Маш муу");
// }
// else if(studentPoint <= 60 && studentPoint < 70){
//     console.log('Хангалттай');
// }
// else if(studentPoint <= 70 && studentPoint < 80){
//     console.log('Дунд');
// }
// else if(studentPoint <= 80 && studentPoint < 90){
//     console.log("Сайн");
// }
// else if(studentPoint <= 90 && studentPoint < 100){
//     console.log("Маш сайн");
// }
// else{
//     studentResult = 'Onoo dandaa 1000-aas doosh baih ystoi';
    
//}
// alert(studentName + ' - ' + studentPoint + ' - ' +
//         studentResult);


// 
//alert("Lorem Ipsum is simply \"\it's\" dummy text of the printing and typesetting industry. \n\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \t when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")


// console.log('its log');
// console.error("its error");

// const str = "life, the universe and everything";
// console.log(str.length);


// const registerNumber = prompt("Please give me your register");

// console.log(registerNumber);
// console.log(str.length);

// if(registerNumber.length != 10){
//     alert("The register number correct");
// }
// else{
//     alert("The register number incorrect");
// }

//.charAt() & str[index]




// const registerNumber2 = prompt("Register number first two letter")
// console.log(registerNumber2.length);
// console.log(str.charAt(0));
// console.log(str[1]);
// console.log(registerNumber2.charAt(0));
// console.log(registerNumber2[1]);


// console.log(registerNumber2.toUpperCase());


// let firstName = "John";
// let fullName = firstName.concat('','smill');

// console.log(fullName);
// console.log(firstName);

//.substr(эхлэхИндекс,[урт]);




//ehnii 2 useg uldsen too
//  const registerChar = registerNumber2.substr(0, 2);
//  const registerNum = registerNumber2.substr(2, 9);
// console.log(Number('ABC'));

// if(Number(registerChar) == NaN ){
//     console.log("your register char are wrong");
// }
// else{
//     console.log("your register char are correct");
// }


// console.log(Number("abc"));
// console.log(Number.isInteger(Number("abc")));
// console.log(Number("12345678"));
// console.log(Number.isInteger(Number("12345678")));

// if( !Number.isInteger(Number(registerChar)) && Number.isInteger(Number(registerNum)) && registerNumber2.length == 10){
//     console.log("correct");
// }
// else{
//     console.log("incorrect");
// }



//phone number

const pnumber = prompt("Please give me your phone number");
console.log(pnumber.length)
console.log(Number("123456789"));
console.log(Number.isInteger(Number("123456789")));
console.log(pnumber.substr(0, 4));

if( Number.isInteger(Number(pnumber)) && pnumber.length == 12 ){
    console.log("correct phone number");
}
else{
    console.log("incorrect phone number");
}


console.log("Hello I am 'Angel Here' \n I am '17 here' years old \n \t This is the new line with tab and some \\ .")

const sequence = prompt("Please give me date");

const O = "Otgonmunkh";
const G = "Gerelbaatar";
console.log(O.length);
console.log(G.length);
console.log(O.toUpperCase());
console.log(G.toLowerCase());

let A = "Pinecone academy- нь ";
let guade = A.concat('Leap хөтөлбөрт тавтай морилно уу?');
console.log(A);
console.log(guade);


