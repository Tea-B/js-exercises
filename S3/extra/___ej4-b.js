const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];

    let div$$ = document.createElement("div");
    document.body.appendChild(div$$);

    let h4$$ = document.createElement("h4");
    h4$$.textContent = country.title;
    
    let img$$ = document.createElement("img");
    img$$.setAttribute("src", country.imgUrl);

// Podemos obviar los createElement, los textContent y los setAttribute con:
// ------- div$$.innerHTML = `<h4>
//                              ${country.title}
//                            </h4>
//                            <img src="${country.imgUrl}"/>`;
//
// (Importante las comillas `` para los saltos de linea)
// -------------------------------------------------------------------------

    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
}


let button$$ = document.querySelector("button");

function click () {
    let div$$ = document.querySelectorAll("div");
    div$$[div$$.length - 1].remove();
 }

button$$.addEventListener("click", click);

