const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let par = (array) => {
    return array % 2 === 0;
}

let pares = ages.filter(par);

console.log(pares);