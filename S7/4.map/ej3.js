const cities = [
    {isVisited:true, name: 'Tokyo'}, 
    {isVisited:false, name: 'Madagascar'},
    {isVisited:true, name: 'Amsterdam'}, 
    {isVisited:false, name: 'Seul'}
];

let map = (array) => {

    if (array.isVisited === true) {
        array.name = array.name + " (Visitado)"
    } else {
        array.name = array.name + " (NO visitado)"
    }

    return array.name;
}

let citiesName = cities.map(map);

console.log(citiesName);