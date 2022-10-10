const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let button$$ = document.querySelector('[data-function="toShowFilterStreamers"]');
let input$$ = document.querySelector('[data-function="toFilterStreamers"]');
let value;

function click () {
    console.log(input$$.value);
    value = input$$.value;

    let resultado = streamers.filter(busqueda);
    console.log(resultado);
}

button$$.addEventListener("click", click);

let busqueda = (array) => {

    if (array.name.includes(value)) {
        console.log(array);
        return array;
    } 
}