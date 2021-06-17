let n = 17;
let promise = new Promise((resolve, reject) => {
    // producing code
    setTimeout(function () {
        // consider a long operation
        n = Math.pow(n * 135, 5);
        resolve(n);
    }, 4000);      // wait for four sec
});

// consuming code wait until the producing code is not executed fully
promise.then(
    function (n) {
        console.log("After execution of producing code\n")
        console.log(n);
    }
)