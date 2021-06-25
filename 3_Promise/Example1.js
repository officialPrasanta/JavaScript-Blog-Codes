function pseudoFetch(a) {
    setTimeout(() => {
        a = "I Love Chess";
    }, 3000);
}

let a = "I Love Football";
pseudoFetch(a);
console.log(a);