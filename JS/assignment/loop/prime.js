

let palindromic = Number(prompt("please give me a number"))

for(let i = 2; i < palindromic ; i++) {
    if(palindromic % i === 0) {
        console.log("It isn't palindromic number", palindromic)
        break;
    } else if(palindromic % 1 === 0 && palindromic % palindromic === 0) {
        console.log("It's palindromic number", palindromic)
        break;
    }
}

