const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div$$ = document.querySelector('[data-function="printHere"]')

let ul$$ = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
    let li$$ = document.createElement("li");
    li$$.textContent = cars[i];

    ul$$.appendChild(li$$);
}

div$$.appendChild(ul$$);