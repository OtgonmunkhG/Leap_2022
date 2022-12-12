let myBtn = document.getElementById("button");
console.log(myBtn);

function changeBgColor() {
    let p = document.getElementById("click")
    p.style ="background: red;"
    let lastp = document.getElementById("double")
    lastp.style ="background: yellow;"
}

myBtn.addEventListener("click", changeBgColor );


