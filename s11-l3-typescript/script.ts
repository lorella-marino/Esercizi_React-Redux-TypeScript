// 1) Quali sono i tipi primitivi principali in TypeScript?
// string, number, boolean, undefined, null, any, never

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

let nome: string = "Lorella";
let età: number = 24;
let studyTs: boolean = true;

// 3) Tipizza il parametro della seguente funzione: const greet = (name) => {  return "Ciao " + name }

const greet = (name: string) => {
  return "Ciao " + name;
};
console.log(greet("Lorella"));

// 4) Specifica il tipo di ritorno della seguente funzione: const sum = (a: number, b: number) => {  return a + b }

const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(2, 3));

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const prezzoIVA = (prezzo: number): number => {
  return prezzo * 1.22;
};
console.log(prezzoIVA(15));

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const concatenaEMisura = (a: string, b: string): number => {
  return (a + b).length;
};
console.log(concatenaEMisura("Buon", "giorno"));

/* const concatenaEMisura = (str1: string, str2: string): number => {
  return (str1 + str2).length;
};
console.log(concatenaEMisura("Buon", "giorno")); */

// 7) Cos'è un Type Union e come si scrive?
// Il Type Union è | e permette di unire più tipi primitivi

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let variabile: number | null | undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

type GiorniSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";
let oggi: GiorniSettimana = "Mercoledì";

// 10) Tipizza il seguente array di numeri nei due modi possibili: const numbers = [1, 2, 3]
const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

let tupla: [string, string, string, number, number];

// 12) Qual è la differenza tra type e interface?
// type permette la creazione di tipi "custom", mentre interface permette di specificare la struttura di un oggetto.

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface obj {
  firstname: string;
  lastname: string;
  age: number;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface utente {
  email: string;
  tel?: number;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

type Studente = {
  nome: string;
  voto: number;
};

const studenti: Studente[] = [
  { nome: "Marco", voto: 30 },
  { nome: "Giorgio", voto: 28 },
  { nome: "Lorenzo", voto: 29 },
];
console.log(studenti);

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Veicolo {
  tipo: string;
}

interface Auto extends Veicolo {
  marca: string;
  anno: number;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

const myAuto: Auto = {
  tipo: "macchina",
  marca: "Fiat",
  anno: 2012,
};
console.log(myAuto);

// 18) Cosa sono i Generics in TypeScript?
// sono dei type arguments che permettono di definire funzioni, classi o interfacce, con diversi tipi di dati.

// 19) È possibile avere più tipi generici in un'interfaccia?
// si

// 20) Crea un'interfaccia generica per una risposta API.

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface Utente {
  nome: string;
  email: string;
}

const rispostaUtente: ApiResponse<Utente> = {
  success: true,
  message: "Utente trovato",
  data: {
    nome: "Mario Rossi",
    email: "mario.rossi@example.com",
  },
};
