let datos = [];

fetch("https://breakingbadapi.com/api/characters")
.then(function (result) {
return result.json();
})
.then(function (data) {
console.log(data);
datos = [...data];
creacion();
});

let creacion = () => {
    for (let i = 0; i < datos.length; i++) {
        const element = datos[i];
        let img = element.img;
        let nombre = element.name;
    
        let div$$ = document.createElement("div");
        div$$.innerHTML = `<img src="${img}" alt="Foto de ${nombre}"/>
                           <p>Nombre: ${nombre}</p>`;
    
        document.body.appendChild(div$$);
    }
}