const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let ul$$ = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
    let li$$ = document.createElement("li");
    li$$.textContent = countries[i];

    ul$$.appendChild(li$$);
}

document.body.appendChild(ul$$);