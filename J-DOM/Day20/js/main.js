// document.getElementById("hellotext").innerHTML = "Hello World";
// document.getElementsByClassName("dummy")[0].innerHTML = "New dummy!";
// document.getElementsByClassName("dummy")[1].innerHTML = "New dummy!";
// document.getElementsByClassName("dummy")[2].innerHTML = "New dummy!";
// console.log(getElementsByClassName)("dummy")[0];

console.log(document.querySelector("#aimagNames"));

console.log(document.getElementById("aimagNames"));
console.log(document.querySelector(".Khangai"));

//uur object
console.log(document.getElementsByClassName("Khangai"));
console.log(document.querySelectorAll(".Khangai"));
document.querySelector(".demo").innerHTML = "Date: " + Date();

console.log(document.querySelector("img").src ="img/aurora.jpeg");

const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("body");
const h1 = document.querySelector("h1");
h1.appendChild(newDiv);
main[0].appendChild(newDiv);
console.log(document.getElementsByTagName("body"));