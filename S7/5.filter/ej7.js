const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let input$$ = document.querySelector('[data-function="toFilterStreamers"]');
let value;

function input (event) {
    console.log(event.target.value);
    value = event.target.value;

    let resultado = streamers.filter(busqueda);
    console.log(resultado);
}

input$$.addEventListener("input", input);

let busqueda = (array) => {

    if (array.name.includes(value)) {
        console.log(array);
        return array;
    } 
}

