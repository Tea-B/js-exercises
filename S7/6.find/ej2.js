const movies = [
    {title: 'Madagascar', stars: 4.5, date: 2015},
    {title: 'Origen', stars: 5, date: 2010},
    {title: 'Your Name', stars: 5, date: 2016}
];

let buscar = (array) => {
    return array.date === 2010;
}

let peli = movies.find(buscar);

console.log(peli);