console.log("exercises");
document.getElementById("aimag-101").innerHTML;
console.log(document.getElementById("aimag-101").innerHTML);
console.log(document.getElementById("aimag-522").innerHTML);
console.log(document.getElementById("aimag-315").innerHTML);
document.getElementById("aimag-315").innerHTML = "Bayraa";

document.getElementById("aimagNames").style ="font-size: 30px";

document.getElementById("aimag-522").style ="background-color: brown";
document.getElementById("aimag-120").style ="border: 1px dashed black";
document.getElementById("aimag-219").style ="background-color: blue";

for(let i = 0; i < document.getElementsByClassName("Khangai").length; i++){
    document.getElementsByClassName("Khangai")[i].style = "font-size: 35px; background-color: magenta;"
}

console.log(document.getElementById("aimagNames").id);
const lilength = document.getElementById("aimagNames").getElementsByTagName("li").length;
console.log(document.getElementById("aimagNames").getElementsByTagName("li")[lilength - 1].innerHTML);

document.getElementsByTagName("span")[0].innerHTML = "Hello"
console.log(document.getElementById("aimagNames").getElementsByTagName("li")[0].id.includes("aimag-1"));

for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if (document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-1")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style ="background-color: red"

    }
    else if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-2")){
         document.getElementById("aimagNames").getElementsByTagName("li")[i].style ="background-color: green"
    }
    else if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-3")){
         document.getElementById("aimagNames").getElementsByTagName("li")[i].style ="background-color: aqua"
    }
    else if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-4")){
         document.getElementById("aimagNames").getElementsByTagName("li")[i].style ="background-color: aquamarine"
    }
    
}
console.log("new");
