// ESERCIZIO 3
// Scrivere un programma che simuli un distributore di bevande:
// fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
// se inserisce 1, seleziona acqua e quindi stampare in console: “È stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “È stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “È stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovrà riproporre la domanda di partenza (modificato)
// PS: Potete provare ad inserire condizioni e controlli ulteriori se volete sperimentare. Stupitemi!

let selezione;

do {
    selezione = prompt("Inserire la scelta \n 1 - acqua \n 2 - coca-cola \n 3 - birra");
} while (selezione <= 0 || selezione > 3) 





switch (selezione) {
    case '1':
    console.log("hai scelto l'acqua");
    break;
    case '2':
    console.log("hai scelto la coca-cola");
    break;
    case '3':
    console.log("hai scelto la birra");
    break;
    default:
    console.log("scelta non valida");
    break;
}

console.log(selezione);