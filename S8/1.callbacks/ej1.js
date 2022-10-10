const numbersList = [];

function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function father(a, b, callback) {
    let result = callback(a, b);
    numbersList.push(result);
}

father(0, 3, sum);
father(3, 3, substract);
father(1, 3, substract);

console.log(numbersList);
