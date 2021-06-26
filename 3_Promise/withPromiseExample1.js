// Example 1
let myFavoritePlayer = {};

//function 1
function getDataFromSourceA(resolve, reject) {
    setTimeout((myFavoritePlayer) => {
        myFavoritePlayer = {
            Football: "Ronaldo",
            Chess: "Carlsen"
        };
        resolve(myFavoritePlayer);
    }, 3000);
}

//function 2
function getDataFromSourceB(myFavoritePlayer) {
    myFavoritePlayer = {
        Football: "Messi",
        Chess: "Anand"
    };
    console.log(myFavoritePlayer);
}

// Enclosed first function into Promise
let myPromise = new Promise((resolve, reject) => {
    // call first function 
    getDataFromSourceA(resolve, reject);
})

// Consuming Code
myPromise.then(
    (myFavoritePlayer) => {
        console.log(myFavoritePlayer);
        // call second function
        getDataFromSourceB(myFavoritePlayer);
    }
);