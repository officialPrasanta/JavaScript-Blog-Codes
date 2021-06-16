// Program: 1
// classical way of writing javascript function
function cfactorial(num) {
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f = f * i;
    }
    console.log(`Classical Function: \n`);
    console.log(`factorial of ${num} is ${f}`);
}
// call cfactorial(num)
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
// call afactorial(num)
afactorial(num = 5);



// Program 2:
//**** this with classical and  arrow function ****//

// A classical function
function displayThisInClassical() {
    console.log(this);
}

// A arrow function
let displayThisInArrow = () => {
    console.log(this);
}

// helperFunction() to create buttons in show <div>, 
// adds classical and arrow function to the buttons

function helperFunction() {
    let container = document.getElementById('show');

    // button 1
    let btn1 = document.createElement('button');
    btn1.innerHTML = "Button 1";
    btn1.setAttribute('id', 'btn1');
    // add event listener to the button 1 which triggered displayThisInClassical()
    btn1.addEventListener('click', displayThisInClassical);
    container.appendChild(btn1);

    // button 2
    let btn2 = document.createElement('button');
    btn2.innerHTML = "Button 2";
    btn2.setAttribute('id', 'btn2');
    // add event listener to the button 2 which triggered displayThisInArrow()
    btn2.addEventListener('click', displayThisInArrow);
    container.appendChild(btn2);
}

// initiate the helper function when the window loads
window.addEventListener('load', helperFunction);