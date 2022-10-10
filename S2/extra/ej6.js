let memos = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

function changeParameters(array, param1, param2) {
    console.log(array);

    let index1 = array.indexOf(param1);
    let index2 = array.indexOf(param2);

    array.splice(index1, 1, param2);
    array.splice(index2, 1, param1);

    console.log(array);
}

changeParameters(memos, "Cristiano Romualdo", "Mesirve")