let arrayej = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

let index;

function findArrayIndex(array, text) {
    if (array.includes(text)) {
        index = array.indexOf(text);
        let posicion = index + 1;
        console.log("--- Se ha encontrado una coincidencia de la palabra introducida: " + text + ", su indice en el array es: " + index + ". (" + posicion + "º Posicion)");

    } else {
        console.log("--- La palabra introducida no coincide con ningun valor del array.");
        index = -1;
    }
}

function removeItem(arrayRm, textRm) {
    findArrayIndex(arrayRm, textRm);

    if (index != -1) {
        console.log("--- Eliminando la coincidencia: " + textRm + "...")
        arrayRm.splice(index, 1);
    } else {
        console.log("--- No se eliminara ningun elemento del array.");
    }

    console.log(arrayRm);
}


removeItem(arrayej, "Caracol");

removeItem(arrayej, "Ajolote");

removeItem(arrayej, "Tortuga");

