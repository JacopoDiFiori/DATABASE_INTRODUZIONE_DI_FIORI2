// ESERCIZIO 1
// Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
// -se v è minore di 18, stampare in console “insufficiente”
// -se v è maggiore uguale a 18 e minore di 21, stampare in console “sufficiente”
// -se v è maggiore uguale a 21 e minore di 24, stampare in console: “buono”
// -se v è maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
// -se v è maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
// -se v è uguale a 30, stampare in console: “eccellente”
// Esempio:
// let v = 29;
// Output: Ottimo
// Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch, case.

let v = 31;

switch(true){
    case (v >= 18 && v < 21) :
    console.log("Sufficente");
        break;
    case (v >= 21 && v < 24) :
    console.log("Buono");
        break;
        case (v >= 24 && v < 27) :
    console.log("Distinto");
        break;
        case (v >= 27 && v <= 29) :
    console.log("Ottimo");
        break;
        case (v == 30) :
    console.log("Eccellente");
        break;   
        case (v > 30) :
            console.log("Smithers libera i cani!");
        break; 
    default:
        console.log("Insufficente");
        break;
}

















// console.log(`Il voto é ${v}`);
// if (v < 18) {
//     console.log("Insufficente");
// } else if (v >= 18 && v < 21) {
//     console.log("Sufficente");
// } else if (v >= 21 && v < 24) {
//     console.log("Buono");
// } else if (v >= 24 && v < 27) {
//     console.log("Distinto");
// } else if (v >= 27 && v <= 29) {
//     console.log("Ottimo");
// } else if (v == 30){
//     console.log("Eccellente");
// } else {
//     console.log("Smithers libera i cani!");
// }





