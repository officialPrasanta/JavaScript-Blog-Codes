// classical way of writing javascript function

function cfactorial(num) {
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f = f * i;
    }

    console.log(`Classical Function: \n`);
    console.log(`factorial of ${num} is ${f}`);
}

cfactorial(num = 10);


// Arrow function in javascript

const afactorial = (num) => {
    let f = 1;

    for (let i = 1; i <= num; i++) {
        f = f * i;
    }

    console.log(`Arrow Function: \n`);
    console.log(`factorial of ${num} is ${f}`);
}

afactorial(num = 5);
