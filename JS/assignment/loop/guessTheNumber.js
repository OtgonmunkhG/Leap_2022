console.log("i'm still here")

let number = Number(prompt("guess number"))

for(let i = 0; i < 100; i++) {
    let random = Math.floor(Math.random() * 100  ) + 1
    console.log(random)
    if(number === random) {

        console.log("Таны сансан тоо", number)
         break;
    } else if(number + 1 === random || number -1 === random) {
        console.log("дөхж байна")
        break;
    } else {
        console.log("азгүй байлаа")
    }
}