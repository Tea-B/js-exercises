let datos = [];

fetch("https://ghibliapi.herokuapp.com/films")
.then(function (result) {
return result.json();
})
.then(function (data) {
console.log(data);
datos = [...data];
creacion();
});

let creacion = () => {
    let divExt$$ = document.createElement("div");
    divExt$$.className = "b-gallery"

    for (let i = 0; i < datos.length; i++) {
        const element = datos[i];
        let img = element.image;
        let nombre = element.title;
    
        let div$$ = document.createElement("div");
        div$$.className = "b-gallery__item"
        div$$.innerHTML = `<h1 class="b-gallery__title">${nombre}</h1>
                           <img src="${img}" alt="Foto de ${nombre}"/>`;
    
        divExt$$.appendChild(div$$);
    }

    document.body.appendChild(divExt$$);
}