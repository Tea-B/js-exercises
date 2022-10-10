const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];

let contadorWaves = 0;
let contadorRain = 0;
let contadorFirecamp = 0;
let contadorShower = 0;
let contadorTrain = 0;
let contadorWind = 0;

for (const user of users) {
    for (const sound in user.favoritesSounds) {
        if (sound == "waves") {
            contadorWaves++
        } else if (sound == "rain") {
            contadorRain++
        } else if (sound == "firecamp") {
            contadorFirecamp++
        } else if (sound == "shower") {
            contadorShower++
        } else if (sound == "train") {
            contadorTrain++
        } else {
            contadorWind++
        }
    }
}

console.log("contadorWaves: " + contadorWaves);
console.log("contadorRain: " + contadorRain);
console.log("contadorFirecamp: " + contadorFirecamp);
console.log("contadorShower: " + contadorShower);
console.log("contadorTrain: " + contadorTrain);
console.log("contadorWind: " + contadorWind);