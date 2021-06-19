// Example: 2
let btnPromise = () => Promise((resolve, reject) => {
    function btnCreation() {
        let container = document.getElementById('show');
        const btn = document.createElement('button');
        btn.innerHTML = "I/O Operation";
        btn.setAttribute('id', 'btn');
        container.appendChild(btn);
    }

    window.addEventListener('load', btnCreation);
})

let btnPromise = new Promise((resolve, reject) => {
    let btn1 = document.querySelector('btn')
    btn1.addEventListener('click', function () {
        resolve("John kept his Promise");
    });
});

btnPromise.then((g) => {
    console.log(g);
    console.log("So will I...");
});