let arrayej = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    if (array.includes(text)) {
        let index = array.indexOf(text);
        let posicion = index + 1;
        console.log("--- Se ha encontrado una coincidencia de la palabra introducida: " + text + ", su indice en el array es: " + index + ". (" + posicion + "º Posicion)");
    } else {
        console.log("--- La palabra introducida no coincide con ningun valor del array.");
    }
}

findArrayIndex(arrayej, "Caracol");

findArrayIndex(arrayej, "Ajolote");

findArrayIndex(arrayej, "Tortuga");