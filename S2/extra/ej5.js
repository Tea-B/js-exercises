function rollDice(numeroCaras) {
    return Math.floor(Math.random() * (numeroCaras - 1) + 1);
}

console.log(rollDice(6));

console.log(rollDice(8));

console.log(rollDice(10));