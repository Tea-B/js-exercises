const numbers = [32, 21, 63, 95, 100, 67, 43];

let buscar = (array) => {
    return array === 100;
}

let cien = numbers.find(buscar);

console.log(cien);