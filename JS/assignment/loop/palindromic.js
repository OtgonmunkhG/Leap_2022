console.log("palindromic number")

let palindromic = prompt("Please give me a number", 
'111')
let firstLetter = palindromic.charAt(0)
let secondLetter = palindromic.charAt(1)
let lastLetter = palindromic.charAt(2)
if(firstLetter === lastLetter || firstLetter === secondLetter) {
    console.log("It is palndromic number")
} else {
    console.log("It isn't palindromic number")
}


