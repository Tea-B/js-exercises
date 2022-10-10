let getCharacters = async () => {
    let respuesta = await fetch('https://rickandmortyapi.com/api/character');
    let datos = await respuesta.json()
    console.log(datos);
}

getCharacters();