function psudoFetch(a) {
    setTimeout(() => {
        a = "I Love Chess";
    }, 3000);
}

let a = "I Love Football";
psudoFetch(a);
console.log(a);