const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

for (let i = 0; i < alumns.length; i++) {
    let element = alumns[i];
    
    if (element.T1 && element.T2 === true || element.T1 && element.T3 === true || element.T2 && element.T3 === true) {
        console.log(element.name + " Esta aprobado.");
        element.isApproved = true;
        console.log(alumns);
    } else {
        console.log(element.name + " No esta aprobado.");
        element.isApproved = false;
        console.log(alumns);
    }
}