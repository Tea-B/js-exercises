const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

let lol = (array) => {
    
    let juegaLol = array.gameMorePlayed.includes("Legends");

    if (juegaLol && array.age > 35) {
        array.gameMorePlayed = array.gameMorePlayed.toUpperCase();
    }

    return juegaLol;
}

let quienLol = streamers.filter(lol);

console.log(quienLol);