let datos = [];

fetch("http://localhost:3000/diary")
.then(function (result) {
        return result.json();
    }
)
.then(function (data) {
        console.log(data);
        datos = [...data];
        creacion();
    }
);

let creacion = () => {
    let datosOrdenados = datos.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log(datosOrdenados);

    for (let i = 0; i < datosOrdenados.length; i++) {
        const element = datosOrdenados[i];
        let title = element.title;
        let date = element.date;
        let content = element.description;
    
        let div$$ = document.createElement("div");
        div$$.innerHTML = `<h3>${title}</h3>
                           <h5>${date}</h5>
                           <p>${content}</p>`;
    
        let button$$ = document.createElement("button");
        button$$.textContent = "X";
        button$$.addEventListener("click", function click () {
                div$$.remove();
            }
        );

        div$$.appendChild(button$$)
        document.body.appendChild(div$$);
    }
}