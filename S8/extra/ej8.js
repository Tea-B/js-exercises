let button$$ = document.querySelector('[data-fn="callACat"]');

let getCat = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(function (result) {
            return result.json();
        }
    )
    .then(function (catData) {
            console.log(catData);
            printCat(catData);
        }
    );
}

button$$.addEventListener("click", getCat);

let printCat = (catData) => {

    let catImg = catData[0].url;
    console.log(catImg);

    let div$$ = document.createElement("div");
    div$$.innerHTML = `<img src="${catImg}"/>`;

    let button$$ = document.createElement("button");
    button$$.textContent = "X";
    button$$.addEventListener("click", function click () {
            div$$.remove();
        }
    );

    div$$.appendChild(button$$)
    document.body.appendChild(div$$);
}