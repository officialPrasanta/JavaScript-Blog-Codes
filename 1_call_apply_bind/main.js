
//Explaination:

//a function measures the distance
function printTheDistance(unit, direction) {
    let x1, x2, y1, y2;
    x1 = this.first_coordinate[0];
    y1 = this.first_coordinate[1];
    x2 = this.second_coordinate[0];
    y2 = this.second_coordinate[1];

    let x_diff = x2 - x1;
    let y_diff = y2 - y1;
    let distance = Math.sqrt(x_diff ** 2 + y_diff ** 2);
    console.log(distance.toFixed(2) + " " + unit + " " + direction);
}

// call() method examples
// Example 1:
//an object containing coordinates

const coordinates = {
    first_coordinate: [1, 1],
    second_coordinate: [4, -3]
}

//call method
printTheDistance.call(coordinates, "km", "south");  // In call() method the argument pass as comma separated value

// Example 2:
//another object containing coordinates
const coordinates2 = {
    first_coordinate: [12, -4],
    second_coordinate: [25, 4]
}

//call method
printTheDistance.call(coordinates2, "meter", "west");

// apply() method example
// Example
printTheDistance.apply(coordinates, ["km", "south"]); // In apply() method the argument pass in array


// bind() method example
// Example
let a_function = printTheDistance.bind(coordinates2, "meter", "west")

// The bind() method create a copy of the actual method and combined it with object and then return back a function to work with later.

console.log(a_function);
a_function();