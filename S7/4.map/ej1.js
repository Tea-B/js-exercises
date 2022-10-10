const users = [
    {id: 1, name: 'Abel'}, 
    {id:2, name: 'Julia'},
    {id:3, name: 'Pedro'}, 
    {id:4, name: 'Amanda'}
];

let map = (array) => {
    return array.name;
}

let userName = users.map(map);

console.log(userName);