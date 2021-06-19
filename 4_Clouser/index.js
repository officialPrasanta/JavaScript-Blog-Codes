function render() {
    const heading = ce('h1');
    const para = ce('p');
    node = document.createTextNode("Javascript Clouser")
    heading.appendChild(node);
    node = document.createTextNode("check console...");
    para.appendChild(node);

    const root = document.getElementById('root');
    root.appendChild(heading);
    root.appendChild(para);
}

//helper function
function ce(string) {
    return document.createElement(string);
}

window.addEventListener('load', render);