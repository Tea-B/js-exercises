const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let mayor18 = (array) => {
    return array > 18;
}

let mayores18 = ages.filter(mayor18);

console.log(mayores18);
