// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da 
// corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la 
// bici con peso minore.

let bici = [
    { nome: "lasWag", peso: 6.9 },
    { nome: "bmx", peso: 5.7 },
    { nome: "snow", peso: 8.0 },
    { nome: "rossa", peso: 9.1 }
];

function leggera(bici) {

    let biciLeggera = bici [0];

    for(let i = 0; i < bici.length; i++){
        if(bici[i].peso < biciLeggera.peso){
            biciLeggera = bici[i];
        }
    }

    return biciLeggera;
}


const piuLeggera = leggera(bici);
console.log(`La bici più leggera è la ${piuLeggera.nome} con peso di ${piuLeggera.peso} kg.`);