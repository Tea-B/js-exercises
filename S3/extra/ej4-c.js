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

    let button$$ = document.createElement("button");
    button$$.textContent = "Eliminame!";
    button$$.addEventListener("click", function click () {
            div$$.remove();
        }
    );

    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
    div$$.appendChild(button$$);
}





