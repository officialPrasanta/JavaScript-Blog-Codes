function render() {
    const heading = ce('h1');
    const para = ce('p');
    node = document.createTextNode("call(), apply() and bind() method")
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