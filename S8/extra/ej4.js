let baseUrl = "http://localhost:3000/"
let planets = [];

fetch(baseUrl + "planets")
.then(function (result) {
        return result.json();
    }
)
.then(function (planetsData) {
        planets = [...planetsData];
        console.log(planets);
        printPlanets();
    }
);

let planets$$ = document.querySelector('[data-function="planets"]');

let printPlanets = () => {
    for (let i = 0; i < planets.length; i++) {
        const element = planets[i];
        let planetName = element.name;
        let planetImg = element.image;
        let planetId = element.id;
    
        let divP$$ = document.createElement("div");
        divP$$.style.margin = "20px"

        let h1P$$ = document.createElement("h1");
        h1P$$.textContent = planetName;
        
        let imgP$$ = document.createElement("img");
        imgP$$.style.height = "300px";
        imgP$$.setAttribute("src", planetImg);

        imgP$$.addEventListener("click", function click () {
                getCharacters(planetId);
            }
        );

        divP$$.appendChild(h1P$$);
        divP$$.appendChild(imgP$$);
        planets$$.appendChild(divP$$);
    }
}

let search$$ = document.querySelector('[data-function="search"]');

let printSearch = () => {
    search$$.innerHTML = "";

    let input$$ = document.createElement("input");

    let button$$ = document.createElement("button");
    button$$.textContent = "Buscar"
    button$$.addEventListener("click", () => click(input$$.value));

    search$$.appendChild(input$$);
    search$$.appendChild(button$$);
}

let value;
let resultado;

function click (searchValue) {
    console.log(searchValue);
    value = searchValue;

    resultado = characters.filter(busqueda);
    console.log(resultado);

    printCharacters(resultado);
}

let busqueda = (array) => {

    let coincidencia = array.name.toLowerCase();

    if (coincidencia.includes(value)) {
        console.log(array);
        return array;
    } 
}

let characters = [];

let getCharacters = (id) => {
    fetch("http://localhost:3000/characters?idPlanet=" + id)
    .then(function (result) {
            return result.json();
        }
    )
    .then(function (charactersData) {
            characters = [...charactersData];
            console.log(characters);
            printCharacters(characters);
            printSearch();
        }
    );
}

let characters$$ = document.querySelector('[data-function="characters"]');

let printCharacters = (array) => {
    characters$$.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let characterName = element.name;
        let characterImg = element.avatar;
    
        let divC$$ = document.createElement("div");
        divC$$.style.margin = "20px"
        divC$$.innerHTML = `<h1>${characterName}</h1>
                            <img src="${characterImg}" height="200px" alt="Foto de ${characterName}"/>`

        characters$$.appendChild(divC$$);
    }
}


