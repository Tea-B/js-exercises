let baseUrl = "http://localhost:3000/"

fetch(baseUrl + "orders")
.then(function (result) {
        return result.json();
    }
)
.then(function (ordersData) {
        console.log(ordersData);
        printPedidos(ordersData);
    }
);

let printPedidos = (array) => {
    let pedidosOrdenados = array.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log(pedidosOrdenados);

    for (let i = 0; i < pedidosOrdenados.length; i++) {
        const element = pedidosOrdenados[i];
        let date = element.date;
        let productos = element.products;

        for (let j = 0; j < productos.length; j++) {
            const product = productos[j];
            let productId = product.productId;
            
            getProducts(productId);
        }

    
        let div$$ = document.createElement("div");
        div$$.innerHTML = `<h1>${date}</h1>`;
    
        document.body.appendChild(div$$);
    }
}

let getProducts = (id) => {
    fetch("http://localhost:3000/products/" + id)
    .then(function (result) {
            return result.json();
        }
    )
    .then(function (productData) {
            console.log(productData);
            let productName = productData.name;

            printProducts(productName);
        }
    );
}