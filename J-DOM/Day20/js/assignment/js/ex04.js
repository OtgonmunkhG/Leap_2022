console.log("random color generator");
let colors = document.getElementsByTagName("body");
let bgColor = "white";
if(colors === bgColor){
    document.getElementsByTagName("body").style = "background-color: red"
} else if(colors !== bgColor ){
    document.getElementsByTagName("body").style ="background-color:blue"
}