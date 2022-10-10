const car = {
    name: 'Mazda 6', 
    itv: [2015, 2011, 2020]
};

let {name, itv: [año1, año2, año3]} = car;

console.log(name, año1, año2, año3);

//  const { name, itv } = car;

//  const [year1, year2, year3] = itv;
//  const [year1, year2, year3] = car.itv;

//  console.log(name, itv, year1, year2, year3)