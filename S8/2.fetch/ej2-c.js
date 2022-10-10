const baseUrl = 'https://api.nationalize.io?name=';

let input$$ = document.querySelector("input");
let button$$ = document.querySelector("button");
let datos = {};

function click () {
    console.log(input$$.value);

    fetch(baseUrl + input$$.value)
    .then(function (result) {
        return result.json();
    })
    .then(function (data) {
        console.log(data);
        datos = {...data};
        imprimir();
    });
 }

button$$.addEventListener("click", click);

function imprimir() {
    for (let i = 0; i < datos.country.length; i++) {
        const element = datos.country[i];
        let pais = element.country_id;
        let prob = element.probability * 100;
        let nombre = datos.name;
    
        console.log("El nombre " + nombre + " tiene un " + prob + " por ciento de ser de " + pais + ".");
    
        let p$$ = document.createElement("p");
        p$$.textContent = "El nombre " + nombre + " tiene un " + prob + " por ciento de ser de " + pais + ".";

        let button$$ = document.createElement("button");
        button$$.textContent = "X";
        button$$.addEventListener("click", function click () {
                p$$.remove();
            }
        );

        p$$.appendChild(button$$)
        document.body.appendChild(p$$);
    }
}

