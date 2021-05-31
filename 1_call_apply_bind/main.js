
//Explaination:

// Example 1:
//a function measures the distance
function printTheDistance() {
    let x1, x2, y1, y2;
    x1 = this.first_coordinate[0];
    y1 = this.first_coordinate[1];
    x2 = this.second_coordinate[0];
    y2 = this.second_coordinate[1];

    let x_diff = x2 - x1;
    let y_diff = y2 - y1;
    let distance = Math.sqrt(x_diff ** 2 + y_diff ** 2);

}

//a object containing the coordinates

const coordinates = {
    first_coordinate: [1, 1],
    second_coordinate: [4, -3]
}

//call method
printTheDistance.call(coordinates)

// Example 2:


