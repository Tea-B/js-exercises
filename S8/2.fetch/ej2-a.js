const baseUrl = 'https://api.nationalize.io?name=';

let input$$ = document.querySelector("input");
let button$$ = document.querySelector("button");

function click () {
    console.log(input$$.value);

    fetch(baseUrl + input$$.value)
    .then(function (result) {
        return result.json();
    })
    .then(function (data) {
        console.log(data);
    });
 }

button$$.addEventListener("click", click);