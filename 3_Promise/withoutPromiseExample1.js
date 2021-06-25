// Example 1
let myFavoritePlayer = {};

//function 1
function getDataFromSourceA() {
    setTimeout((myFavoritePlayer) => {
        myFavoritePlayer = {
            Football: "Ronaldo",
            Chess: "Carlsen"
        };
        console.log(myFavoritePlayer);
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

// first function to call
getDataFromSourceA();

// second function to call
getDataFromSourceB();
