const ship1 = {name: "Banca rota", damage: 44, pv: 150};
const ship2 = {name: "Cacique pero no", damage: 66, pv: 124}

function attack (ship1, ship2) {

    let name1 = ship1.name;
    let name2 = ship2.name;

    let atkDmg1 = ship1.damage;
    let atkDmg2 = ship2.damage;

    let dmg1 = Math.floor(Math.random() * (atkDmg1) + 1);
    let dmg2 = Math.floor(Math.random() * (atkDmg2) + 1);

    let pv1 = ship1.pv;
    let pv2 = ship2.pv;

    for (let i = 0; i < 999; i++) {
        let j = i + 1;
        if (pv1 <= 0 || pv2 <= 0) {
            return ;
        } else {
            console.log("Ronda " + j + " ---------------");
            for (let i = 0; i < 1; i++) {
                dmg1 = Math.floor(Math.random() * (atkDmg1) + 1);
            
                pv2 = pv2 - dmg1;
                
                console.log("Ataque de " + name1);
                console.log("Vida de " + name2 + " : " + pv2);

                if (pv1 <= 0 || pv2 <= 0) {
                    console.log("Vida de " + name1 + " : " + pv1);
                    console.log("Gana! " + name1);
                    return ;
                }
            }

            for (let i = 0; i < 1; i++) {
                dmg2 = Math.floor(Math.random() * (atkDmg2) + 1);
            
                pv1 = pv1 - dmg2;
            
                console.log("Ataque de " + name2);
                console.log("Vida de " + name1 + " : " + pv1);

                if (pv1 <= 0 || pv2 <= 0) {
                    console.log("Vida de " + name2 + " : " + pv2);
                    console.log("Gana! " + name2);
                    return ;
                }
            }
        }
    }
}

attack(ship1, ship2);