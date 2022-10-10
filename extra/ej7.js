const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`

let splitText = text.split("-");
console.log(splitText);

let texto = [];

for (let i = 0; i < splitText.length; i++) {
    let element = splitText[i];

    let rS = element.slice(1);
    let pL = element.charAt(0).toUpperCase();
    console.log(pL);
    console.log(rS);

    texto.push(pL + rS);
}

console.log(texto);

let newText = texto.join(" ");

console.log(newText);