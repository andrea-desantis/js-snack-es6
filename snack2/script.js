// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, 
// le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 
// nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono 
// solo nomi e falli subiti e stampiamo tutto in console.

let squadreCalcio = [
    {nome: "Roma", puntiFatti: 0, falliSubiti: 0},
    {nome: "Napoli", puntiFatti: 0, falliSubiti: 0},
    {nome: "Milan", puntiFatti: 0, falliSubiti: 0},
    {nome: "Torino", puntiFatti: 0, falliSubiti: 0},
    {nome: "Ponte Galeria FC", puntiFatti: 0, falliSubiti: 0}
];

function puntiFalli(squadreCalcio){
    

    for(let i = 0; i<squadreCalcio.length; i++){
        squadreCalcio[i].puntiFatti = Math.floor(Math.random() * 20)+1;
        squadreCalcio[i].falliSubiti = Math.floor(Math.random() * 20)+1;
    }
    return squadreCalcio;
}



function nomiFalli(squadreCalcio){
    let soloNomiFalli = [];
    

    for(let i = 0; i<squadreCalcio.length; i++){
        let { nome, falliSubiti } = squadreCalcio[i];
        soloNomiFalli.push ({ nome, falliSubiti})
    }
    return soloNomiFalli;
}
puntiFalli(squadreCalcio);
let soloNomiFalli = nomiFalli(squadreCalcio);

console.log("Tutte le squadre:", squadreCalcio);
console.log("Solo nomi e falli:", soloNomiFalli);