// 1) Quali sono i tipi primitivi principali in TypeScript?
// string, number, boolean, undefined, null, any, never
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var nome = "Lorella";
var età = 24;
var studyTs = true;
// 3) Tipizza il parametro della seguente funzione: const greet = (name) => {  return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet("Lorella"));
// 4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => {  return a + b }
var sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 3));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var prezzoIVA = function (prezzo) {
    return prezzo * 1.22;
};
console.log(prezzoIVA(15));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var a = "Buon";
var b = "giorno";
var concStringhe = a.concat(b);
console.log(concStringhe);
// 7) Cos'è un Type Union e come si scrive?
// Il Type Union è | e permette di unire più tipi primitivi
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var variabile;
var oggi = "Mercoledì";
// 10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tupla;
var studenti = [
    { nome: "Marco", voto: 30 },
    { nome: "Giorgio", voto: 28 },
    { nome: "Lorenzo", voto: 29 },
];
console.log(studenti);
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var myAuto = {
    tipo: "macchina",
    marca: "Fiat",
    anno: 2012,
};
console.log(myAuto);
var rispostaUtente = {
    success: true,
    message: "Utente trovato",
    data: {
        nome: "Mario Rossi",
        email: "mario.rossi@example.com",
    },
};
